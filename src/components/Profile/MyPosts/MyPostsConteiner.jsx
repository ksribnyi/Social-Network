import {addPostActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getUsersFriend} from "../../../redux/usersSelector";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        usersFriend: getUsersFriend (state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost : (newPostText) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsConteiner;