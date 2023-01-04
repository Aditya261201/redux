// if we have more than one reducers then we can collect them at one place and export all at once.

import {combineReducers} from 'react'
import amountReducer from './amountReducer'



// we can wrap all of the reducers and combine them to export 
const reducers = combineReducers({
    amount: amountReducer
})


export default reducers