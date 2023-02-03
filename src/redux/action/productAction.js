import { ActionType } from "../contants/action-types"
export const setProducts= (products) => {
    return{
        type: ActionType.SET_PRODUCTS,
        payload: products
    };
};

export const selectedProduct= (product) => {
    return{
        type: ActionType.SETECTED_PRODUCT,
        payload: product
    };
};

