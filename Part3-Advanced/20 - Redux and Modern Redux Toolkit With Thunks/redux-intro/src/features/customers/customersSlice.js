import {createSlice} from "@reduxjs/toolkit";

const initialState  = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}

const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID){
                return {
                    payload: {
                        fullName,
                        nationalID,
                        createdAt: new Date().toLocaleString(),
                    }
                }
            },
            reducer(state, action){
                state.fullName = action.payload.fullName;
                state.nationalID = action.payload.nationalID;
                state.createdAt = action.payload.createdAt;
            }
        },
        updateName(state, action){
            state.fullName = action.payload;
        }
    }
})

export const {createCustomer, updateCustomer} = customerSlice.actions;

export default customerSlice.reducer;

/*
export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullName: action.payload.fullname,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            };
        case 'customer/updateName':
            return {
                ...state,
                fullName: action.payload,
            };
        default:
            return state;
    }
}




// action creator function
export function createCustomer(fullname, nationalID) {
    return {type: 'customer/createCustomer', payload: {fullname, nationalID, createdAt: Date.now().toLocaleString()}}
}

export function updateName(fullname) {
    return {type: 'customer/updateName', payload: fullname}
}
*/

