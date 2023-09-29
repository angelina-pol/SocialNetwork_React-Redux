import profilePageReduser from "./profilePageReducer";
import dialogsPageReduser from "./dialogsPageReducer";

const store = {

    _state: {
        profilePage: {
            posts: [
                {id:1, message: "Hi, how are you", likeCounts: 12},
                {id:2, message: "It is my first post", likeCounts: 11},
            ],
            newPostText: ''
        },
    
        dialogsPage: {
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
        },

        news: {},

        music: {},

        settings: {},
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profilePageReduser(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReduser(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
};

window.store = store;
export default store;