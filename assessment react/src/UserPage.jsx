import { useParams } from 'react-router-dom';
import FetchData from './FetchData';
import User from './components/User';
import Post from './components/Post';

const UserPage = () => {
    const { userId } = useParams()
    const { users, posts, loading, error } = FetchData()

    if (loading) return <div><img src={Logo} className="logo react" alt="React logo" /></div>
    if (error) return <div>Erro: {error.message}</div>

    const user = users.find((user)=> user.id === parseInt(userId))
    const userPosts = posts.filter((post)=> post.userId === parseInt(userId))

    return (
        <div className='main-card'>
            <User user={user}/>
            {userPosts.map((post)=>(
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <Post post={post}/>
                    </Link>
                </div>
            ))}
        </div>
    )
}