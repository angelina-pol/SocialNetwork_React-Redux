import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
          <div className={classes.item}>
            <img src="https://sobakovod.club/uploads/posts/2021-11/thumbs/1637618846_73-sobakovod-club-p-sobaki-korgi-multyashnie-82.jpg"/>
            {props.message}
            <div>
            <span>like</span>
            {' ' + props.likeCounts}
            </div>
          </div>
    )
}

export default Post;