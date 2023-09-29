import React from 'react';
import classes from './Dialogs.module.css'
import NewMessageContainer from './Message/NewMessageContainer';

const Dialogs = (props) => {
      return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsElements}
            </div>
            <div className={classes.messages}>
                {props.messagesElements}
            </div>
            <div className={classes.newMessage}>
                <NewMessageContainer />
            </div>
        </div>
      )
}

export default Dialogs
