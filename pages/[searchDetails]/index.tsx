import classes from './searchDetails.module.scss';
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';


const searchDetails = ({query, valueExist, txValue, blockValue}:any) => {

    // console.log(blockValue,'yehhhh')


    console.log('valueExist', valueExist)

    return (
        <>
            {blockValue &&
            <>
                'block content'
            </>
            }
            {txValue &&
            <>
                'tx content'
            </>
            }
            { valueExist || 
            
            'invalid search'
            }
         
             
            {/* {valueExist ? 
                <>
                    <h1>Block hash: {query}</h1>
                    <br/>
                    {valueExist.hash}
                </>
                :
                <>
                    <h1> Transaction</h1>
                </>
            } */}
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
        console.log('searchBlockRes', searchBlockRes);
        blockValue = searchBlockRes;
        valueExist = true;
        console.log('blockValueExist', valueExist);
        console.log('trans value', blockValue);
    }
    // if query is a transaction
    catch (err) {
        console.log(err)
        try {
            let searchTxRes = await web3.eth.getTransaction(query);
            console.log('searchTxRes',searchTxRes);
            txValue = searchTxRes;
            valueExist = true;
            console.log('txValueExist', valueExist);
            console.log('tx value', txValue)
        }
        // query is neither block nor transaction
        catch (err) {
            console.log(err)
        }
    }
    // await fetch(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`, {
    //     body: `{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["${query}", true],"id":0}`,
    //     headers: {
    //     "Content-Type": "application/json"
    //     },
    //     method: "POST"
    // });
    // if query is a block
    // if (searchBlockRes.status < 300) {
    //     console.log('searchBlockRes',searchBlockRes)
    //     console.log('status', searchBlockRes.status)
    //     let blockData = await Promise.resolve(searchBlockRes.json());
    //     console.log(blockData)
    // } else {
    //     console.log('query is not a block')
    // }

    return {
        props: {
            query,
            blockValue,
            txValue,
            valueExist,
        }
    }
}

// export async function getStaticProps(context:any) {
//     console.log('context',context)
//     console.log('context searchDetails',context.params.searchDetails)

//     // const searchValue = context.params.value
//     // console.log('params',searchValue)
//     // const [blockValue, setBlockValue] = useState({})
//     // const [transValue, setTransValue] = useState({})
//     // const Web3 = require('web3');

//     // const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
//     // const web3 = createAlchemyWeb3(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`);

    
//     // try {
//     //     // web3 doesn't have search block by ONLY hash - so using alchemy
//     //     let searchBlockRes = await fetch(`https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`, {
//     //       body: `{"jsonrpc":"2.0","method":"eth_getBlockByHash","params":["${value}", true],"id":0}`,
//     //       headers: {
//     //         "Content-Type": "application/json"
//     //       },
//     //       method: "POST"
//     //     });
//     //     let searchBlock = await Promise.resolve(searchBlockRes.json());
//     //     if (searchBlock.result) {
//     //       setBlockValue(searchBlock.result);
//     //       console.log('searchValueB', blockValue)
//     //     }
//     //     else {
//     //       try {
//     //         let searchTransRes = await web3.eth.getTransaction(value);
//     //         console.log(searchTransRes,'dfsf')
//     //         if (searchTransRes) {
//     //           setTransValue(searchTransRes);
//     //           console.log('searchValueT', transValue)
//     //         }
//     //       }
//     //       catch (err) {
//     //         console.log(err)
//     //       }
//     //     }
//     //   }
//     //   catch (err) {
//     //     console.log(err)
//     //   }
//     //   finally {
//     //     router.push(`/${value}`);
//     //   }

//     return {
//         props: {
            
//         }
//     }
// }

export default searchDetails;