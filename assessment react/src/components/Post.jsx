import './components.css'

const Post = ({post}) => {
    return (
        <div className='post-card' >
            <h2>{post.name}</h2>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Post