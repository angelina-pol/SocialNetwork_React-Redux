import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Profile from '../Profile/Profile'
import { compose } from 'redux';

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    }

    useEffect(() => {
        props.getUserProfile(userId);
        props.getStatus(userId);
    }, [userId])

    return (
        <div>
          <Profile profile={props.profile} 
                   status={props.status} 
                   updateStatus={props.updateStatus} />
        </div>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthNavigate
) (ProfileContainer)