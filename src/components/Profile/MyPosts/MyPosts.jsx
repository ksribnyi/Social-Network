import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: '1', message: 'HI, how are you?', likesCount: '12'},
        {id: '2', message: 'Its my first post', likesCount: '11'}
    ]
    return (
        <div className={s.posts_block}>
            <h3>Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>ADD POST</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} like={postData[0].likesCount}/>
                <Post message={postData[1].message} like={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;