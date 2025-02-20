

const initialStateCustomer = {
    fullName: '',
    nationalID: '',
    createdAt: '',
}


export default function customerReducer(state = initialStateCustomer, action) {
    switch (action.type) {
        case 'customer/createCustomer':
            return {
                ...state,
                fullname: action.payload.fullname,
                nationalID: action.payload.nationalID,
                createdAt: action.payload.createdAt
            };
        case 'customer/updateName':
            return {
                ...state,
                fullname: action.payload,
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
