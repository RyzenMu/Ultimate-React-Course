import {combineReducers, createStore} from "redux";
import accountReducer from "./features/accounts/accountsSlice";
import customerReducer from "./features/customers/customersSlice";
// root reducer
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

// creating a redux store

const store = createStore(rootReducer);

export default store;

