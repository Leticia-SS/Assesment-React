import Logo from '/logo.png'
import './App.css'
import PostsByUser from './main'

function App() {

  return (
    <>
    <PostsByUser/>
      <div>
          <img src={Logo} className="logo react" alt="React logo" />    
      </div>
      
    </>
  )
}

export default App
