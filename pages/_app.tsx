import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {Navbar} from '../components';
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }: AppProps) {

  // const [blockValue, setBlockValue] = useState({})
  // const [transValue, setTransValue] = useState({})
  const [searchValue, setSearchValue] = useState('')

  const router = useRouter();


  async function handleSearch(value: any) {
    // const Web3 = require('web3');

    // const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    // const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

    console.log('value', value)
    // setSearchValue(value);
    // console.log('searchValue',searchValue)
    router.push(`/${value}`);


    // try {
    //   // web3 doesn't have search block by ONLY hash - so using alchemy
    //   let searchBlockRes = await fetch(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`, {
    //     body: `{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["${value}", true],"id":0}`,
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     method: "POST"
    //   });
    //   let searchBlock = await Promise.resolve(searchBlockRes.json());
    //   if (searchBlock.result) {
    //     setBlockValue(searchBlock.result);
    //     console.log('searchValueB', blockValue)
    //   }
    //   else {
    //     try {
    //       let searchTransRes = await web3.eth.getTransaction(value);
    //       console.log(searchTransRes,'dfsf')
    //       if (searchTransRes) {
    //         setTransValue(searchTransRes);
    //         console.log('searchValueT', transValue)
    //       }
    //     }
    //     catch (err) {
    //       console.log(err)
    //     }
    //   }
    // }
    // catch (err) {
    //   console.log(err)
    // }
    // finally {
    //   router.push(`/${value}`);
    // }
  }


  return (
    <>
    <header className="navbar">
      <Navbar/>
    </header>
      <Component
        {...pageProps}
        // handleSearch = {handleSearch}
        // blockValue={blockValue}
        // transValue={transValue}
        // searchValue={searchValue}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
    </>
  )
}

export default MyApp
