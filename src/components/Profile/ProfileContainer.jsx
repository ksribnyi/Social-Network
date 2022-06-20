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
    return <ProfileContainer {...props} navigate={navigate} params={paramId}/>
}

class ProfileContainer extends React.Component {
    state ={
        paramId: this.props.params.uid
    }
    componentDidMount() {
        let userId = this.state.paramId
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getStatus(userId)
        this.props.viewProfile(userId)

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
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})


export default compose(connect(mapStateToProps, {
    viewProfile,
    getStatus,
    updateStatus
}), withAuthNavigator)(UsersProfileContainer);