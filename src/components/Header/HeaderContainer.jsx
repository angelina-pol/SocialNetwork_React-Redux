import React, {useEffect} from 'react';
import axios  from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/authReduser'
import Header from './Header';

function HeaderContainer(props) {

    useEffect(() => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {Id, email, login} = response.data.data;
                    props.setAuthUserData(Id, email, login)
                }
            })
    })

    return (
        <Header isAuth={props.isAuth} login={props.login}/>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);