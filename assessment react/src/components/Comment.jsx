import './components.css'

const Comment = ({comment }) => {

    const newName = (name) => {
        const nameSplit = name.split(" ")
        if (nameSplit.lenght >2) {
            const first = nameSplit[0]
            const last = nameSplit[nameSplit.lenght - 1]
            return `${first} ${last}`
        }
        return name
    }

    const username = (email) => {
        const emailSplit = email.split("@")
        return `@${emailSplit[0]}`
    }

    return (
        <div className='comment-card'>
            <h2>{newName(comment.name)}</h2>
            <p>{username(comment.email)}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment