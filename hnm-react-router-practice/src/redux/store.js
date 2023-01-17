import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
// import productReducer from "./reducers/productReducer";
import rootReducer from "./reducers/index" //index로 한 이유가 자동으로 읽어오기 때문
let store = createStore(rootReducer,applyMiddleware(thunk));
//미들웨어 사용 준비

export default store;

