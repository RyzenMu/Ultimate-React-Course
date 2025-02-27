import {applyMiddleware, combineReducers, createStore} from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
import {composeWithDevTools} from "redux-devtools-extension";

import {thunk} from "redux-thunk"
// root reducer
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

// creating a redux store

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

