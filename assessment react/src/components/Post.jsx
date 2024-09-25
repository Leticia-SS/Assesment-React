import './components.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBug } from '@fortawesome/free-solid-svg-icons';


const Post = ({post}) => {
    return (
        <div className='post-card' >
            <h2 className='title-content'><FontAwesomeIcon icon={faBug} /> {post.title}</h2>
            <p className='body-content'>{post.body}</p>
        </div>
    )
}

export default Post