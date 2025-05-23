import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: '',
    isLoading: false,
}
const accountSlice = createSlice({
    name: 'accounts',
    initialState: initialState,
    reducers: {

        deposit(state, action) {
            state.balance = state.balance + action.payload;
            state.isLoading = false;
        },
        withdraw(state, action) {
            state.balance = state.balance - action.payload;
        },
        requestLoan: {
            prepare(amount, purpose){
                return {
                    payLoad: {amount, purpose}
                }
            },
            reducer(state, action) {
                if (state.loan > 0) return;
                state.balance = state.balance + action.payload.amount;
                state.loan = state.loan + action.payload.amount;
                state.loanPurpose = state.loanPurpose + action.payload.purpose;
            }
        },
        payLoan(state, action) {
            state.balance = state.balance - state.loan;
            state.loan = 0;
            state.loanPurpose = '';
        },
        convertingCurrency(state) {
            state.isLoading = true;
        }
    }
})

console.log(accountSlice);
/*
export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case 'accounts/deposit':
            return {...state, balance: state.balance + action.payload, isLoading: false};
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
        case 'accounts/convertingCurrency':
            return {...state, isLoading: true}
        default:
            return state;
    }
}

// Action Creator Function
export function deposit(amount, currency) {
    if (currency === 'USD') return {type: 'accounts/deposit', payload: amount};
    return async function (dispatch, getState) {
        dispatch({type:'accounts/convertingCurrency'})
        //API call
        // const resp = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`);
        const resp = await fetch(`https://api.frankfurter.dev/v1/latest`);

        const data = await resp.json();
        const rate = data.rates.USD;

        //return action
        const converted = amount * rate;
        dispatch({type: 'accounts/deposit', payload: converted});
    }
}

export function withdraw(amount) {
    return {type: 'accounts/withdraw', payload: amount};
}

export function requestLoan(amount, purpose) {
    return {type: 'accounts/requestLoan', payload: {amount, purpose}};
}

export function payLoan() {
    return {type: 'accounts/payLoan'};
}
*/

export const {, withdraw, requestLoan, payLoan} = accountSlice.actions;

export function deposit(amount, currency) {
    if (currency === 'USD') return {type: 'accounts/deposit', payload: amount};
    return async function (dispatch, getState) {
        dispatch({type:'accounts/convertingCurrency'})
        //API call
        // const resp = await fetch(`https://api.frankfurter.dev/v1/latest?base=${currency}&symbols=USD`);
        const resp = await fetch(`https://api.frankfurter.dev/v1/latest`);

        const data = await resp.json();
        const rate = data.rates.USD;

        //return action
        const converted = amount * rate;
        dispatch({type: 'accounts/deposit', payload: converted});
    }
}
console.log(requestLoan(1000, 'buy bike'))
export default accountSlice.reducer;
