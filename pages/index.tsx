import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import { Navbar, Searchbar, Statistics, Blocks, Transactions } from '../components';
import {useState} from 'react';


const Home: NextPage = ({ infura, ethPrice, transactions, blocksBatch, handleSearch }: any) => {
  

  // const [blockValue, setBlockValue] = useState({})
  // const [transValue, setTransValue] = useState({})

  // async function handleSearch(value: string) {
  //   const Web3 = require('web3');
  
  //   const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  //   const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

  //   console.log(value)

  //     try {
  //       // web3 doesn't have search block by ONLY hash - so using alchemy
  //      let searchBlockRes = await fetch(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`, {
  //           body: `{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["${value}", true],"id":0}`,
  //           headers: {
  //             "Content-Type": "application/json"
  //           },
  //           method: "POST"
  //         });
  //       let searchBlock = await Promise.resolve(searchBlockRes.json());
  //       if (searchBlock.result) {
  //         setBlockValue(searchBlock.result);
  //         console.log('blockValue',blockValue)

  //       }
  //       else {
  //         try {
  //           let searchTransRes = await web3.eth.getTransaction(value);
  //           let searchTrans = await Promise.resolve(searchTransRes);
  //           if (searchTrans) {
  //             setTransValue(searchTrans);
  //             console.log('transValue',transValue)
  //           }
  //         }
  //         catch (err) {
  //           console.log(err)
  //         }
  //       }
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  // }

  return (
    <div className={classes.container}>
      <Head>
        <title>Etherskan</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://i.icomoon.io/public/temp/4dd956f873/UntitledProject/style-svg.css" />
        <script defer src="https://i.icomoon.io/public/temp/4dd956f873/UntitledProject/svgxuse.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/@alch/alchemy-web3@latest/dist/alchemyWeb3.min.js"></script>
      </Head>
      {/* <header className={classes.navbar}>
        <Navbar />
      </header> */}
      <main className={classes.main}>
        <section className={classes.searchbarSection}>
          <Searchbar handleSearch={handleSearch} />
        </section>
        <section>
          <Statistics ethPrice={ethPrice} />
        </section>
        <section className={classes.blockTransactionSection}>
          <div className={classes.blocks}>
            <Blocks />
          </div>
          <div className={classes.transactions}>
            <Transactions transactions={transactions} />
          </div>
        </section>
      </main>
    </div>
  )
}


export async function getStaticProps(context: any) {
  const { params } = context;
  const Web3 = require('web3');
  
  const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
  const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

  const [infuraRes, ethPriceRes, latestBlock] = await Promise.all([
    fetch(`https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`, {
      body: '{"jsonrpc":"2.0","method":"eth_hashrate","params":[],"id":1}',
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    }),
    fetch("https://coinranking1.p.rapidapi.com/coin/razxDUgYGNAdQ?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.RAPID_API_KEY}`,
      }
    }),
    web3.eth.getBlock('latest'),
    
  ])

  const [infura, ethPrice, transactions ] = await Promise.all([
    infuraRes.json(),
    ethPriceRes.json(),
    latestBlock.transactions,
    
  ])

  const latest = await web3.eth.getBlockNumber();
  // console.log(latest)
  let blocksBatch = new web3.BatchRequest()
  for (let i = 0; i < 2; i++) {
    blocksBatch.add(
      web3.eth.getBlock.request(latest - i, (err, res) => res)
    )
  }
  blocksBatch.execute();
  // Promise.resolve(blocksBatch.execute())
  // .then (blocksBatch => blocksBatch);

  return {
    props: {
      infura,
      ethPrice,
      transactions,

      // blocksBatch,
    }
  }
}

export default Home;
