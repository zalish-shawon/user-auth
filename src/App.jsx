
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'


function App() {
  
  return (
    <BrowserRouter>
    {/* Header */}
    <Header/>
    <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signIn' element={<SignIn/>} />
        <Route path='/signUp' element={<SignUp/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
