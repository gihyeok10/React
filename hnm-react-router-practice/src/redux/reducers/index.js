import { combineReducers } from "redux";

import authenticateReducer from "./authenticateReducer";
import productReducer from "./productReducer";
import detailReducer from "./detailReducer";




export default combineReducers({
    detail: detailReducer,
    auth: authenticateReducer,
    product: productReducer,
});