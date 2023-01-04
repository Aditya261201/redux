import React from 'react'
import {useDispatch} from 'react-redux'
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index'


const Bank = () => {
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
    return (

        <div>
            
            {/* if we want to use the state without bindActionCreators ||| */}

            {/* <h2 className="my-3">Deposit / Withdraw money</h2>
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}



            <h2 className="my-3">Deposit / Withdraw money</h2>
            <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
            {/* Updating state from a different component in Redux */}
        </div>
    )
}

export default Bank
