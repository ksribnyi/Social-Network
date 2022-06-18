import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, updateStatus, viewProfile} from "../../redux/profileReducer";
import {withAuthNavigator} from "../hoc/withAuthNavigator";
import {useNavigate, useParams} from "react-router";
import {compose} from "redux";

const UsersProfileContainer = (props) => {
    let paramId = useParams()
    let navigate = useNavigate()
    debugger
    return <ProfileContainer {...props} navigate={navigate} params={paramId}/>
}

class ProfileContainer extends React.Component {
    state ={
        paramId: this.props.params.uid
    }
    componentDidMount() {
        this.props.getStatus(this.state.paramId)
        this.props.viewProfile(this.state.paramId)
        debugger

    }
    render() {
        if (!this.props.isAuth) return this.props.navigate('/login')
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        )


    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(connect(mapStateToProps, {
    viewProfile,
    getStatus,
    updateStatus
}), withAuthNavigator)(UsersProfileContainer);