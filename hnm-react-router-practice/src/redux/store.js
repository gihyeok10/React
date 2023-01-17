import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";
let store = createStore(productReducer,applyMiddleware(thunk));
//미들웨어 사용 준비

export default store;

