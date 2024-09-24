import { Link } from 'react-router-dom'
import FetchData from './FetchData'
import User from './components/User'
import Logo from '/logo.png'

const Main = () => {
    const { users, loading, error } = FetchData()

    if (loading) return <div><img src={Logo} className="logo react" alt="React logo" /></div>
    if (error) return <div>Erro: {error.message}</div>

    return (
        <div className='main-card'>
            {users.map((user)=>(
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <User user={user} />
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Main