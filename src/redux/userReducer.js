/* eslint-disable */
const initialState = {
    user : JSON.parse(localStorage.getItem('user')) || null,
    isLoggedIn: false,
}

const userReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'LOGIN':
            return {...state, user: action.payload, isLoggedIn: true}
        case 'LOGOUT':
            return { ...state, user:null, isLoggedIn: false}
        case 'REGISTER' :
            return {...state, user: action.payload, isLoggedIn: true}
        default:
            return state
    }
}

export default userReducer