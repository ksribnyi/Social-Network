import React from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";


let mapStateToPropsForNavigator = (state) => ({
    isAuth: state.auth.isAuth
})

export  const withAuthNavigator = (Component)=>{
    class NavigatorComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    let ConnectedAuthNavigatorComponent = connect(mapStateToPropsForNavigator)(NavigatorComponent);

    return ConnectedAuthNavigatorComponent;
}