import './App.css'
import Authentication from './components/Authentication'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import ProfilePage from './pages/ProfilePage'
import {Routes,Route, Link} from 'react-router-dom'
import {useState} from 'react'

const App = () => {
const [authToken, setAuthToken] = useState(null)

  return (
    <>
      
      <nav>
        <ul>
          <li> 
            <Link to="/">Home </Link>
          </li>
          <li> 
            <Link to="/authTest"> Auth Test </Link>
          </li>
          <li> 
            <Link to="/posts">Posts </Link>
          </li>
          <li> 
            <Link to="/profile">Profile </Link>
          </li>
        </ul>
      </nav>

      <h2>Well Hello There!</h2>
      {authToken && <h4> This is your token: {authToken}</h4>}
      <Routes>
        <Route path='/' element={<HomePage setAuthToken={setAuthToken} />} />
        <Route path='/authTest' element={<Authentication setAuthToken={setAuthToken} />} />
        <Route path='/posts' element={<PostsPage />} />
        <Route path='/profile' element={<ProfilePage authToken={authToken}/>} />
      </Routes>
    </>
  )
}

export default App
