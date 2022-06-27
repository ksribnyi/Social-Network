import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validator/validator";
import {Textarea, TextFieldform} from "../../common/FormsControls/FormsControls";
import userPhoto from "../../../asets/image/user_icon.jpg";
import {Button} from "@mui/material";

const maxLength10 = maxLengthCreator(10)

const addNewPostForm = (props) => {
    return (
        <form className={s.formAddPost} onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component={TextFieldform} validate={[required, maxLength10]}
                       placeholder='New post' style={{
                    width: "450px"
                }}/>
            </div>
            <div>
                <Button type={"submit"} variant={"contained"} style={{background: '#e8802d',
                height: '40px'}} color={"primary"} size={'small'}>Add
                    post</Button>
            </div>
        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(addNewPostForm)

const MyPosts = React.memo((props) => {
    let postsElements =
        props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.posts_block}>
            <div className={s.posts}>
                <h3>My posts</h3>
                <div>
                    <AddNewPostFormRedux onSubmit={onAddPost}/>
                </div>
                <div className={s.myPost}>
                    {postsElements}
                </div>
            </div>

            <div className={s.friends}>
                {props.usersFriend.map(u => <div className={s.friendItem} key={u.id}><img alt={'usersPhoto'}
                                                                                          src={u.photos.small != null ? u.photos.small : userPhoto}
                                                                                          className={s.userPhotoFriend}/> {u.name}
                </div>)}
            </div>
        </div>
    )
})

export default MyPosts;