import './App.css';
import { Suspense, lazy } from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));

const App = function (props) {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/dialogs/*' element={<Suspense><DialogsContainer /></Suspense>} />
            <Route path='/profile/:userId?' element={<Suspense><ProfileContainer /></Suspense>} />
            <Route path='/news/*' element={<News/>} />
            <Route path='/music/*' element={<Music/>} />
            <Route path='/users/*' element={<UsersContainer/>} />
            <Route path='/settings/*' element={<Settings/>} />
            <Route path='/login/*' element={<Login/>} />
          </Routes>
        </div>
      </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;