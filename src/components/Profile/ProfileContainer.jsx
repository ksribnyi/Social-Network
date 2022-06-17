import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, updateStatus, viewProfile} from "../../redux/profileReducer";
import {withAuthNavigator} from "../hoc/withAuthNavigator";
import {useParams} from "react-router";
import {compose} from "redux";

const UsersProfileContainer = (props) => {
    let paramId = useParams()
    debugger
    return <ProfileContainer {...props} params={paramId}/>
}

class ProfileContainer extends React.Component {
    state ={
        paramId: this.props.params.uid
    }
    componentDidMount() {

        // if (!this.state.paramId) {
        //     this.state.paramId = 24434;
        // }
        this.props.getStatus(this.state.paramId)
        this.props.viewProfile(this.state.paramId)
        debugger

    }
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.paramId !== this.props.params.uid) {
    //         this.setState({
    //             paramId: this.props.params.uid
    //         })
    //     }
    // }

    render() {
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