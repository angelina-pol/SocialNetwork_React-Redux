const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE = 'UPDATE-MESSAGE';
const REMOVE_TEXT = 'REMOVE-TEXT';

let initialState = {
    messages: [    
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you'},
        {id:3, message: 'woof woof'},
        {id:4, message: 'WOOF WOOF'},
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valery'},
    ],  
    newMessage: '' 
}

const dialogsPageReduser = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessageAdd = {
                id: 5,
                message: state.newMessage,
            }
            return {
                ...state,
                messages: [...state.messages, newMessageAdd],
                newMessage: '',
            }
        case UPDATE_MESSAGE: 
            return {
                ...state,
                newMessage: action.inputNewMessage,
            }  
        case REMOVE_TEXT: 
            return {
                ...state,
                newMessage: '',
            }   
        default:
            return state;    
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

export const inputMessageActionCreator = (message) => ({
    type: UPDATE_MESSAGE,
    inputNewMessage: message,
})

export const removeTextActionCreator = () => ({
    type: REMOVE_TEXT,
})

export default dialogsPageReduser;