import './components.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

const Comment = ({comment, onDelete }) => {

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

    const deleteComment  = () => {
        if (window.confirm('Deseja remover este comentário?')) {
            onDelete(comment.id);
        }
    };

    return (
        <div className='comment-card'>
            <button className='remove-btn' onClick={deleteComment}><FontAwesomeIcon icon={faTrash} /></button>
            <h2>{newName(comment.name)}</h2>
            <p>{username(comment.email)}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment