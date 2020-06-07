import {REMOVE_ITEM} from './types';

export const removeItem=(product)=>{
    return (dispatch) =>{
        dispatch({
            type:REMOVE_ITEM,
            payload:product
        })
    }
}