import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const REMOVE_TEXT = 'REMOVE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
    posts: [
        {id:1, message: "Hi, how are you", likeCounts: 12},
        {id:2, message: "It is my first post", likeCounts: 11},
    ],
    newPostText: '',
    profile: null,
    status: '',
}

const profilePageReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCounts: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }    
        case REMOVE_TEXT: {
            return {
                ...state,
                newPostText: '',
            }
        }  
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }     
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }  
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.postId != action.postId)
            }
        }
        default:
            return state;    
    } 
}

export const addPostActionCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const removeTextActionCreator = () => ({
    type: REMOVE_TEXT,
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status,
})

export const deletePost = (postId) => ({
    type: DELETE_POST,
    postId,
})

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export default profilePageReduser;