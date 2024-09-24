import './components.css'

const Comment = ({comment }) => {

    const username = (email) => {
        const emailSplit = email.split("@")
        return `@${emailSplit[0]}`
    }

    return (
        <div className='comment-card'>
            <h2>{comment.name}</h2>
            <p>{username(comment.email)}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment