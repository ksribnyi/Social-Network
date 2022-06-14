import {usersAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}


export const setUserData = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})

export const checkAuth = () => {
    return (dispatch) => {
        usersAPI.checkAuth().then(data => {
            if (data.resultCode === 0 ) {
                let {email, login, id} = data.data;
                dispatch(setUserData( id, login,email));
            }
        })
    }
}


export default authReducer;