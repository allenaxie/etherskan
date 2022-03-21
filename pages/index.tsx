import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import { Searchbar, Statistics, Blocks, Transactions, Footer } from '../components';
import {useState} from 'react';


const Home: NextPage = ({ ethPrice, transBatch, blocksBatch, handleSearch }: any) => {
  
  let ethCurrentPrice = parseInt(ethPrice.data.coin.price)

  const EthTxData = [
    {
      date: '03/02',
      value: 2640,
    },
    {
      date: '03/03',
      value: 2440,
    },
    {
      date: '03/04',
      value: 2570,
    },
    {
      date: '03/05',
      value: 2590,
    },
    {
      date: '03/06',
      value: 2900,
    },
    {
      date: '03/07',
      value: 2860,
    },
    {
      date: '03/08',
      value: ethCurrentPrice,
    },
  ]
  
  const [ethTxData, setEthTxData] = useState({
    labels: EthTxData.map((data) => data.date),
    datasets:[{
      label: "Ethereum Transaction History",
      data: EthTxData.map((data) => data.value),
      backgroundColor: ['#2a71d0',
    ],
      borderColor: "black",
      borderWidth:1,
    }]
  })

  return (
    <div className={classes.container}>
      <Head>
        <title>Etherskan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <main className={classes.main}>
        <section className={classes.searchbarSection}>
          <Searchbar handleSearch={handleSearch}/>
        </section>
        <section>
          <Statistics ethPrice={ethPrice} ethTxData={ethTxData}/>
        </section>
        <section className={classes.blockTransactionSection}>
          <div className={classes.blocks}>
            <Blocks blocks={blocksBatch} handleSearch={handleSearch}/>
          </div>
          <div className={classes.transactions}>
            <Transactions transactions={transBatch} handleSearch={handleSearch}/>
          </div>
        </section>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}


export async function getStaticProps(context: any) {
  const { params } = context;
  const Web3 = require('web3');
  
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

  const [ethPriceRes, latestBlock] = await Promise.all([
    fetch("https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.RAPID_API_KEY}`,
      }
    }),
    web3.eth.getBlock('latest'),
    
  ])

  const [ ethPrice ] = await Promise.all([
    ethPriceRes.json(),
  ])

  // latest blocks
  let blocksBatch = [];
  for (let i = 0; i < 10; i++) {
    let res = await web3.eth.getBlock(latestBlock.number - i);
    blocksBatch.push(res);
  }

  // latest transactions
  let transBatch = [];
  for (let i=0; i < 10; i++) {
    let res = await web3.eth.getTransactionFromBlock(latestBlock.number, i);
    transBatch.push(res);
  }

  return {
    props: {
      ethPrice,
      transBatch,
      blocksBatch,
    }
  }
}

export default Home;
