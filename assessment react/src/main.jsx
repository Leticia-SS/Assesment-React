import { Link } from 'react-router-dom'
import FetchData from './FetchData'
import User from './components/User'
import Logo from '/logo.png'
import Header from './components/Header'
import Footer from './components/Footer'
import './main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBorderAll, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
    const { users, loading, error } = FetchData()

    if (loading) return <div className='logo-container'><img src={Logo} className="logo react" alt="React logo" /></div>
    if (error) return <div>Erro: {error.message}</div>

    return (
        <div className='landing-page-container'>
        <Header/>
        <div className='main-card'>
            <div className='button-container'>
                <button className='grid-btn'><FontAwesomeIcon icon={faBorderAll} /></button>
            </div>
            {users.map((user)=>(
                <div key={user.id}>
                    <Link to={`/users/${user.id}`}>
                        <User user={user} />
                    </Link>
                </div>
            ))}
        </div>
        <Footer/>
        </div>
    )
}

export default Main