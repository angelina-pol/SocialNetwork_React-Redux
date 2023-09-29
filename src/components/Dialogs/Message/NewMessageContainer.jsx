import React from 'react';
import { addMessageActionCreator, inputMessageActionCreator, removeTextActionCreator } from '../../../redux/dialogsPageReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newMessage: state.dialogsPage.newMessage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => {
      dispatch(addMessageActionCreator())
    },
    onInputMessage: (message) => {
      dispatch(inputMessageActionCreator(message))
    },
    onRemoveText: () => {
      dispatch(removeTextActionCreator())
    },
  }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
