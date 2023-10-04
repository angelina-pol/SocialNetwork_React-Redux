import React from 'react'
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

let mapStateToPropsForNavigate = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthNavigate = (Component) => {
    let navigateComponent = (props) => {
        if (!props.isAuth) {
            return <Navigate to={'/login'} />
        }
        return <Component {...props} />
    }

    let ConnectedauthNavigateComponent = connect(mapStateToPropsForNavigate)(navigateComponent);

    return ConnectedauthNavigateComponent;
}