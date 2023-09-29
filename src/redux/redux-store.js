import { applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import profilePageReduser from './profilePageReducer';
import dialogsPageReduser from './dialogsPageReducer';
import usersReducer from './UsersReducer';
import authReducer from './authReduser';
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReduser,
    dialogsPage: dialogsPageReduser,
    usersPage: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store