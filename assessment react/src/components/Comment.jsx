import './components.css'

const Comment = ({comment }) => {
    return (
        <div className='comment-card'>
            <h2>{comment.name}</h2>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment