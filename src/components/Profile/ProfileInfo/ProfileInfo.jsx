import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus';
import userPhoto from '../../../assets/images/instealPhoto.jpeg';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  const onMainPhotoSelelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  return (
    <div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQFueh66RpGi1fqeA9tYsPP8T9Z9dXkLZzg&usqp=CAU" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQFueh66RpGi1fqeA9tYsPP8T9Z9dXkLZzg&usqp=CAU" />
      </div>
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} className={classes.mainPhoto} />
        {props.isOwner && <input type={"file"} onChange={onMainPhotoSelelected} />}
        <ProfileData profile={props.profile} />
        <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({ profile }) => {
  return <div>
    <div>
      <b>Full name:</b> {profile.fullName}
    </div>
    <div>
      <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>My professional skills:</b> {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>About me:</b> {profile.aboutMe}
    </div>
    <div>
      <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
        <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div classsName={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;