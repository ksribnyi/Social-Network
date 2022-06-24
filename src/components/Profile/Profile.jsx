import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";
import s from './Profile.module.css'

const Profile = (props) => {

    return <div className={s.profile}>
        <Profileinfo  saveProfile={props.saveProfile} profile={props.profile} isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
        <MyPostsConteiner />
    </div>
}

export default Profile;