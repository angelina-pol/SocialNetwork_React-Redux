import { authAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA : {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        } 
        default:
            return state;       
    }
}

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId, email, login}})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.getMe()
    if (response.data.resultCode === 0) {
        let {Id, email, login} = response.data.data;
        dispatch(setAuthUserData(Id, email, login))
    }
}

export default authReducer;