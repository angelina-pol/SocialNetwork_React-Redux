import React from 'react';
import { Navigate } from 'react-router-dom';

const NewMessage = (props) => {

    let refInputMessage = React.createRef();

    if (!props.isAuth) {
      return <Navigate to={'/login/'}></Navigate>
    }

    let addMessage = () => {
      props.onAddMessage();
    }

    let inputMessage = () => {
      let message = refInputMessage.current.value;
      props.onInputMessage(message)
    }

    let removeText = () => {
      props.onRemoveText()
    }

    return (
      <div>
        <h4>Add new message</h4>
        <div>
          <div>
            <textarea onChange={inputMessage} placeholder='Enter your message' ref={refInputMessage} value={props.newMessage}/>
          </div>
          <div>
            <button onClick={ addMessage }>Send message</button>
            <button onClick={ removeText }>Remove</button> 
          </div>
        </div>
      </div>
    )
}

export default NewMessage