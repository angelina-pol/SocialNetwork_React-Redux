import React from 'react';
import classes from './ProfileInfo.module.css'
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQFueh66RpGi1fqeA9tYsPP8T9Z9dXkLZzg&usqp=CAU" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQFueh66RpGi1fqeA9tYsPP8T9Z9dXkLZzg&usqp=CAU" />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;