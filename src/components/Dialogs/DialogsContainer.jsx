import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsElements: state.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} key={d.id} id={d.id} />),

        messagesElements: state.dialogsPage.messages
        .map(m => <Message message={m.message} key={m.id} />)
    }
}  

const DialogsContainer = connect(mapStateToProps, null)(Dialogs);

export default DialogsContainer;
