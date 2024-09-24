import './components.css'

const User = ({user}) => {
    return (
        <div className='user-card'>
            <h2>{user.name}</h2>
            <p>{user.company.catchPhrase}</p>
        </div>
    )
}

export default User