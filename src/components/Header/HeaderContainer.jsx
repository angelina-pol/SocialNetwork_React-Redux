import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/authReduser';
import Header from './Header';

function HeaderContainer(props) {

props.getAuthUserData();

    return (
        <Header isAuth={props.isAuth} login={props.login}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);