import Head from 'next/head';
import { BlockDetails, TxDetails, InvalidSearch, Searchbar } from '../../components';


const searchDetails = ({query, valueExist, txValue, blockValue}:any) => {

    return (
        <>
            <Head>
                <title>Details</title>
            </Head>
            <Searchbar/>
            {blockValue &&
            <>
                <BlockDetails block={blockValue}/>
            </>
            }
            {txValue &&
            <>
                <TxDetails tx={txValue}/>
            </>
            }
            { valueExist || 
                <InvalidSearch query={query}/>
            }
        </>
    )
}

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    searchDetails : '123',
                }
            }
        ]
    }
}

export async function getStaticProps(context:any) {
    const query = context.params.searchDetails;
    console.log('query', query)

    let blockValue = false;
    let txValue = false;
    let valueExist = false;

    const Web3 = require('web3');

    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

    // determine if query is a block, tx, or neither
    // if query is a block
    try {
        let searchBlockRes = await web3.eth.getBlock(query);
        if (searchBlockRes) {
            blockValue = searchBlockRes;
            valueExist = true;
        }
        else {
            // if query is a transaction
            try {
                let searchTxRes = await fetch(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`, {
                body: `{"jsonrpc":"2.0","method":"eth_getTransactionByHash","params":["${query}"],"id":0}`,
                headers: {
                "Content-Type": "application/json"
                },
                method: "POST"
                })
                if (searchTxRes) {
                    txValue = await Promise.resolve(searchTxRes.json());
                    valueExist = true;
                }
            }
            // query is neither block nor transaction
            catch (err) {
                console.log(err)
            }
        }
    }
    catch (err) {
        console.log(err)
    }

    return {
        props: {
            query,
            blockValue,
            txValue,
            valueExist,
        }
    }
}


export default searchDetails;