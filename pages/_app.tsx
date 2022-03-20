import 'antd/dist/antd.css';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import {Navbar} from '../components';
import { collectAssets } from 'next/dist/build/webpack/plugins/middleware-plugin';
import { useRouter } from 'next/router';



function MyApp({ Component, pageProps }: AppProps) {

 
  const [searchValue, setSearchValue] = useState('')

  const router = useRouter();


  function handleSearch (value:any) {
    console.log('searched value',value)
    router.push(`/${value}`)
  }


  return (
    <>
    <header className="navbar">
      <Navbar/>
    </header>
      <Component
        {...pageProps}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        handleSearch={handleSearch}
      />
    </>
  )
}

export default MyApp
