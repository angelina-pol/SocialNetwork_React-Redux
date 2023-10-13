import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.posts
  .map(p => <Post key={p.id} message={p.message} likeCounts={p.likeCounts} />)

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  let removeText = () => {
    props.removeText()
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={ onPostChange } placeholder='New post' ref={newPostElement} value={props.newPostText}/>
        </div>
        <div>
          <button onClick={ onAddPost }>Add posts</button>
          <button onClick={ removeText }>Remove</button>
        </div>
      </div>
      <div className={classes.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;