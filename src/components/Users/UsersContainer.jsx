import React from 'react';
import {connect} from 'react-redux';
import {followSuccess, unfollowSuccess, setCurrentPage, toggleIsFollowingProgress, getUsers} from '../../redux/UsersReducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.followSuccess}
                      unfollow={this.props.unfollowSuccess}
                      followingInProgress={this.props.followingInProgress}
            /> 
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default compose(
    connect(mapStateToProps, {
        followSuccess, unfollowSuccess,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers,
    })
) (UsersContainer)