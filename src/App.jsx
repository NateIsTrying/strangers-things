import './App.css'
import HomePage from './pages/HomePage'
import PostsPage from './pages/PostsPage'
import ProfilePage from './pages/ProfilePage'
import Authentication from './components/Authentication'

const App = () => {

  return (
    <>
      <h2>Well Hello There!</h2>
      <Authentication />
      <HomePage />
      <PostsPage />
      <ProfilePage />
    </>
  )
}

export default App
