import React, {useState} from "react";
import {useWeb3React} from "@web3-react/core";
import { ethers } from 'ethers'
import { Pair, Token, WETH, FACTORY_ADDRESS, INIT_CODE_HASH } from "@uniswap/sdk"
import {UNI_ADDRESS, ROUTER_ADDRESS, ROUTER_ABI, CONTRACT_ABI} from "../constant";
import {updateETH, updateUNI} from "../actions";
import { pack, keccak256 } from "@ethersproject/solidity";
import { getCreate2Address } from "@ethersproject/address";
import {useDispatch, useSelector} from "react-redux";

function RemoveLiquidityButton() {
    const dispatch = useDispatch()
    const LPBalance = useSelector((state) => state?.LPBalance )
    const { chainId, account, active, library } = useWeb3React()

    const [approved, setApproved] = useState(false)
    const [pending, setPending] = useState(false)

    const tokenA = new Token(chainId, UNI_ADDRESS, 18)
    const tokenB = new Token(chainId, WETH[active ? chainId : 3].address, 18)
    const tokens = tokenA.sortsBefore(tokenB) ? [tokenA, tokenB] : [tokenB, tokenA]
    const pair = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(['bytes'], [pack(['address', 'address'], [tokens[0].address, tokens[1].address])]),
        INIT_CODE_HASH
    )

    function approve() {
        const signer = library.getSigner(account).connectUnchecked()
        const amountTokenDesired = LPBalance*(10**18)
        const pairTokenContract = new ethers.Contract(pair, CONTRACT_ABI, signer)

        pairTokenContract.approve(ROUTER_ADDRESS, amountTokenDesired)
            .then((result) => {
                setPending(true)
                result.wait().then(() => {
                    setPending(false)
                    setApproved(true)
                })
            })
    }

    function removeLiquidity(): Promise<Pair> {
        const signer = library.getSigner(account).connectUnchecked()
        const routerContract = new ethers.Contract(ROUTER_ADDRESS, ROUTER_ABI, signer) // create contract instance
        const tokenContract = new ethers.Contract(UNI_ADDRESS, CONTRACT_ABI, library)

        const token = UNI_ADDRESS
        const amountTokenDesired = LPBalance*(10**18)
        const amountTokenMin = '0'
        const amountETHMin = '0'
        const to = account // Send to myself
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20 // 20 minutes from the current Unix time

        routerContract.removeLiquidityETH(token, amountTokenDesired, amountTokenMin, amountETHMin, to, deadline, {gasLimit: 1000000})
            .then((result) => {
                setPending(true)
                result.wait().then( () => {
                    tokenContract.balanceOf(account)
                        .then((result) => dispatch(updateUNI(ethers.utils.formatEther(result))))
                    library.getBalance(account)
                        .then((result) => dispatch(updateETH(ethers.utils.formatEther(result))))
                    setPending(false)
                })
            })
    }

    return (
        <div style={{marginTop:"10px"}}>
            <div>
                ------Remove Liquidity------
            </div>
            { !pending ? (active && (approved ? (
                <button style={{color:"green"}} type="button" onClick={removeLiquidity}>
                    Remove Liquidity
                </button>
            ) : (
                <button style={{color:"red"}} type="button" onClick={approve}>
                    Approve
                </button>
            ))) : (
                <button style={{color:"pink"}} >
                    Pending...
                </button>
            )}
        </div>
    )
}


export default RemoveLiquidityButton

