import './components.css'

const Post = ({post, onClick}) => {
    return (
        <div className='post-card' onClick={() => onClick(post.id)}>
            <h2>{post.name}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post