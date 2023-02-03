//import { type } from "@testing-library/user-event/dist/type"
import { ActionType } from "../contants/action-types";

const initialState = {
    products:[]
}
export const productReducer=(state = initialState, {type, payload}) =>{
switch (type) {
    case ActionType.SET_PRODUCTS:
        return {...state, products:payload}
//break;
    default:
        return state;
        //break;
    }
}

export const selectedProductReducer=(state={}, {type,payload})=>{
    switch (type) {
        case ActionType.SELECTED_PRODUCT:
            return {...state, ...payload}
    //break;
        default:
            return state;
            //break;
        }
}