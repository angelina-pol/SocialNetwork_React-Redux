import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom';

import Profile from '../Profile/Profile'

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    }

    if (!props.isAuth) {
        return <Navigate to={'/login/'}></Navigate>
      }

props.getUserProfile(userId)

    return (
        <div>
          <Profile profile={props.profile} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {getUserProfile,})(ProfileContainer);