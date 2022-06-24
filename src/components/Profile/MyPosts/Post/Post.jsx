import s from './Post.module.css'

const Post = (props) => {

    return (
        <div className={s.item}>
            <img alt={'usersPhoto'}
                src='data:image/jpeg;base64,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'></img>
            {props.message}
            <div>
                <span>LIKE {props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;