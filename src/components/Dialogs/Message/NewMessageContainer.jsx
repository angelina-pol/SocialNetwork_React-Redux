import React from 'react';
import { addMessageActionCreator, inputMessageActionCreator, removeTextActionCreator } from '../../../redux/dialogsPageReducer';
import NewMessage from './NewMessage';
import { connect } from 'react-redux';
import { withAuthNavigate } from '../../../hoc/withAuthNavigate';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthNavigate
) (NewMessage)
