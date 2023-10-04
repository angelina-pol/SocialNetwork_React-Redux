import React from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../redux/profilePageReducer';
import { useParams } from 'react-router-dom'
import { withAuthNavigate } from '../../hoc/withAuthNavigate';
import Profile from '../Profile/Profile'

function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
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
})

let authNavigateComponent = withAuthNavigate(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile,})(authNavigateComponent);