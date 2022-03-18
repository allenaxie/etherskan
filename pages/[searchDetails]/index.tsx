import classes from './searchDetails.module.scss';
import { useRouter } from 'next/router';
import {useState} from 'react';


const searchDetails = ({query}:any) => {

    return (
        <>
            I am search details page
            {query}
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
    console.log(query)

    return {
        props: {
            query,
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