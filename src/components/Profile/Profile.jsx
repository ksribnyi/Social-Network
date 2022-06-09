import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import Profileinfo from "./MyPosts/Profileinfo/Profileinfo";
import MyPostsConteiner from "./MyPosts/MyPostsConteiner";


const Profile = (props) => {

    return <div>
        <Profileinfo/>
        <MyPostsConteiner store={props.store}/>
    </div>
}

export default Profile;