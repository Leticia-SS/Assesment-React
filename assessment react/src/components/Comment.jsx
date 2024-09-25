import './components.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 

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

    const deleteComment = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, {
            method: 'DELETE'
          })
          .then(res => res.text())
      }

    return (
        <div className='comment-card'>
            <button className='remove-btn' onClick={()=>{
                if (window.confirm('Deseja remover este comentário?')) {
                    deleteComment(comment.id)
                }
            }}><FontAwesomeIcon icon={faTrash} /></button>
            <h2>{newName(comment.name)}</h2>
            <p>{username(comment.email)}</p>
            <p>{comment.body}</p>
        </div>
    )
}

export default Comment