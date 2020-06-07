import {INCREASE_QUANTITY,DECREASE_QUANTITY} from './types';

export const productQuantity=(action,key)=>{
    return (dispatch) =>{
        console.log("accion",action)
        console.log("key",key)
        dispatch({
            type:action === "increase" ? INCREASE_QUANTITY :DECREASE_QUANTITY,
            payload:key
        })
    }
}