import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { addPost } from './redux/state';
import { updateNewPostText } from './redux/state';
import { addMessage } from './redux/state';
import { updateMessage } from './redux/state';
import { render } from 'react-dom';

export let renderEntireTree = (state) => {
  render((
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
      addMessage={addMessage}
      updateMessage={updateMessage}
    />
    ),
    document.getElementById('root'),
  );
}
