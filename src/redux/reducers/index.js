import { combineReducers } from "redux";
import { loadingReducer, productReducer, selectedProductReducer } from "./productReducer";

const reducers =combineReducers(
    {
        allProducts:productReducer,
        product: selectedProductReducer,
        load: loadingReducer
    }
)

export default reducers;