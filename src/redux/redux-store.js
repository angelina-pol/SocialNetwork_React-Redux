import { compose, applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
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
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)
));

export default store