import i from "./post.module.css"

const Post = (props) => {
    return (
        <div className={i.post}>{props.name}</div>
    )
}

export default Post;