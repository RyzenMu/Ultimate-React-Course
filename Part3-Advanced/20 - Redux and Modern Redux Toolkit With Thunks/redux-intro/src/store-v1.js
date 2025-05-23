import {combineReducers, createStore} from "redux";

const initialStateAccount = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
}

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}

function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'accounts/deposit':
            return {...state, balance: state.balance + action.payload};
        case 'accounts/withdraw':
            return {...state, balance: state.balance - action.payload};
        case 'accounts/requestLoan':
            if (state.loan > 0) return state;
            // later
            return {
                ...state,
                balance: state.balance + action.payload.amount,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose
            };
        case 'accounts/payLoan':
            // if (state.loan > 0) return state;
            // later
            return {...state, loan: 0, loanPurpose: '', balance: state.balance - state.loan};
        default:
            return state;
    }
}


function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullname: action.payload.fullname,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            };
        case 'custome/updateName':
            return {
                ...state,
                fullname: action.payload,
            };
        default:
            return state;
    }
}

// root reducer
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer,
})

// creating a redux store

const store = createStore(rootReducer);

// store.dispatch({type: 'accounts/deposit', payload: 500});
//
// console.log('hey redux',);
// console.log(store.getState());
//
// //withdraw 200
// store.dispatch({type: 'accounts/withdraw', payload: 200});
// console.log(store.getState());
//
// // request loan
// store.dispatch({
//     type: 'accounts/requestLoan', payload: {
//         amount: 1000,
//         purpose: 'buy a car'
//     }
// });
//
// console.log(store.getState());
//
// //payloan
// store.dispatch({type: 'accounts/payLoan'})
// console.log(store.getState());


// Action Creator Function
function deposit(amount) {
    return {type: 'accounts/deposit', payload: amount};
}

function withdraw(amount) {
    return {type: 'accounts/withdraw', payload: amount};
}

function requestLoan(amount, purpose) {
    return {type: 'accounts/requestLoan', payload: {amount, purpose}};
}

function payLoan() {
    return {type: 'accounts/payLoan'};
}

//dispatch
store.dispatch(deposit(500));
console.log(store.getState());
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(1000, 'buy a car'));
console.log(store.getState());


// action creator function
function createCustomer(fullname, nationalID) {
    return {type: 'customer/createCustomer', payload: {fullname, nationalID, createdAt: Date.now().toLocaleString()}}
}

function updateName(fullname) {
    return {type: 'customer/updateName', payload: fullname}
}

//create customer
store.dispatch(createCustomer('jonas schnedmann', '51581'));
store.dispatch(deposit(400))
console.log(store.getState());