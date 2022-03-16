import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Home.module.scss';
import {Navbar, Searchbar} from '../components';

const Home: NextPage = () => {
  return (
    <div className={classes.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className={classes.main}>
        <section>
          <Searchbar/>
        </section>
        <section>
          Statistics/ Chart
        </section>
        <section>
          <div>
            Latest blocks
          </div>
          <div>
            Latest transactions
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
