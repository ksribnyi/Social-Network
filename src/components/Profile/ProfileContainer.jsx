import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {viewProfile} from "../../redux/profileReducer";
import { withAuthNavigator} from "../hoc/withAuthNavigator";
import {useParams} from "react-router";
import {compose} from "redux";

const UsersProfileContainer = (props) => {
    let paramId = useParams()
    debugger
    return <ProfileContainer {...props}  params={paramId}/>
}

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let paramId = this.props.params
        if (!paramId) {
            paramId.uid = 2;
        }
        this.props.viewProfile(paramId.uid)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )


    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default compose(connect(mapStateToProps, {viewProfile}), withAuthNavigator)(UsersProfileContainer);