import { ADD_PRODUCT_BASKET,
    GET_NUMBERS_BASKET ,INCREASE_QUANTITY,
    DECREASE_QUANTITY,REMOVE_ITEM} from "../actions/types";



const initialState ={
    basketNumbers:0,
    totalPagar:0,
    items:[],
}

export default(state=initialState,action)=>{
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            let existed_item= state.items.find(item=> action.payload.key === item.key)
            if(existed_item){
                existed_item.cantidad +=1;
                return{
                    ...state,
                    totalPagar:state.totalPagar+action.payload.precio,
                }
               
            }
            else{

            return{
                basketNumbers:state.basketNumbers+1,
                items: [...state.items, action.payload],
                totalPagar:state.totalPagar+action.payload.precio,
            }
         }
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
        case INCREASE_QUANTITY:
            let xisted_item= state.items.find(item=> action.payload === item.key)
            if(xisted_item){
                xisted_item.cantidad +=1;
                return{
                    ...state,
                    totalPagar:state.totalPagar+xisted_item.precio,
                }
            }
        case DECREASE_QUANTITY:
            let xisted_item2= state.items.find(item=> action.payload === item.key)
            if (xisted_item2.cantidad>1){
                xisted_item2.cantidad -=1
                return{
                    ...state,
                    totalPagar:state.totalPagar-xisted_item2.precio,
                }
            }else{
                return{
                    ...state,
                }
            }

        case REMOVE_ITEM:
            let xisted_item3= state.items.find(item=> action.payload === item.key)
            let nuevosPRODUC = state.items.filter(item=> action.payload !== item.key)
            let newTotal = state.totalPagar - (xisted_item3.precio * xisted_item3.cantidad )
            return{
                ...state,
                items:nuevosPRODUC,
                totalPagar:newTotal,
                basketNumbers:state.basketNumbers-1,
            }
            
        default:
            return state;
    }
}

/*
 case INCREASE_QUANTITY:
            let existed_item2= state.items.find(item=> action.payload.key === item.key)
            existed_item2.cantidad +=1;
            return{
                ...state,
            }
*/