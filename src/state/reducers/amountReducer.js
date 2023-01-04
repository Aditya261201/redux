
//------- reducer is a function which will change the state.(there can be one or more than one reducers)-------

const reducer = (state=0, action)=>{
    if (action.type === 'deposit') {
        return state + action.payload
    }
    else if (action.type === 'withdraw'){
        return state - action.payload
    }
    else{
        return state;
    }
}    


export default reducer