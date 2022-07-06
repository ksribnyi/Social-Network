import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, savePhoto, saveProfile, updateStatus, viewProfile} from "../../redux/profileReducer";
import {withAuthNavigator} from "../hoc/withAuthNavigator";
import {useNavigate, useParams} from "react-router";
import {compose} from "redux";
import {requestUsersFriends} from "../../redux/usersReducer";


const UsersProfileContainer = (props) => {
    let paramId = useParams()
    let navigate = useNavigate()
    return <ProfileContainer {...props} navigate={navigate} params={paramId}/>
}

class ProfileContainer extends React.Component {

    refreshProfile(){
        let userId = this.props.params.uid
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getStatus(userId)
        this.props.viewProfile(userId)
    }
    componentDidMount() {
        this.refreshProfile()
        this.props.requestUsersFriends(this.props.currentPage, 100)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.params.uid !== prevProps.params.uid){
            this.refreshProfile()
        }
    }

    render() {
        if (!this.props.isAuth) return this.props.navigate('/login')
        return (
            <Profile users={this.props.users} {...this.props} isOwner={!!this.props.authorizedUserId} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus} savePhoto={this.props.savePhoto}/>
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
    updateStatus,
    savePhoto,
    saveProfile,
    requestUsersFriends
}), withAuthNavigator)(UsersProfileContainer);