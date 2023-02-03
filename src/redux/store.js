/*import { configureStore } from "@reduxjs/toolkit";

import postReducer from "./postSlice"

const store = configureStore({
    reducer : {
        user : postReducer
    }
})

export default store; */

import { legacy_createStore } from "redux";
import { fetchedData } from "./Reducer";

export let store=legacy_createStore(fetchedData)