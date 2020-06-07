import {CREATE_LIST} from './types';

export const addItems=(products)=>{
    return (dispatch) =>{  
        console.log("jola",products) 
        dispatch({
            type:CREATE_LIST,
            payload:products
        })
    }
}