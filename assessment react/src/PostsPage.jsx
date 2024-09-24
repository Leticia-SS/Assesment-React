import { useParams } from 'react-router-dom';
import Logo from '/logo.png'
import FetchData from './FetchData';
import User from './components/User';
import Post from './components/Post';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const PostsPage = () => {
    const { userId } = useParams()
    const { users, posts, loading, error } = FetchData()
    const navigate = useNavigate()

    if (loading) return <div><img src={Logo} className="logo react" alt="React logo" /></div>
    if (error) return <div>Erro: {error.message}</div>

    const user = users.find((user)=> user.id === parseInt(userId))
    const userPosts = posts.filter((post)=> post.userId === parseInt(userId))

    return (
        <div className='landing-page-container'>
        <Header/>
        <div className='main-card'>
            <button onClick={() => navigate(-1)}>Back</button>
            {user && <User user={user} />}
            {userPosts.map((post) => (
                <div key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <Post post={post} />
                    </Link>
                </div>
            ))}
        </div>
        <Footer/>
        </div>
        )
}

export default PostsPage