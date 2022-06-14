import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";


const Profile = (props) => {

    return <div>
        <Profileinfo profile={props.profile}/>
        <MyPostsConteiner/>
    </div>
}

export default Profile;