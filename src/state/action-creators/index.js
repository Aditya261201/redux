// -----------------action creator initiates the action.----------------



// these are functions that  returns a function that takes a function.
export const depositMoney=(amount)=>{
    return(dispatch)=>{                      // returning a function that takes a function
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}