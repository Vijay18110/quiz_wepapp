
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import ContextProvider from './store/quiz.jsx'
import Public from './shared/Public/index.jsx';
import Register from './pages/Register'
import Private from './shared/Private/index.jsx';
import Login from './pages/Login/index.jsx';
function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Private element={<Home />} />} />
        <Route path='/register' element={<Public element={<Register />} />} />
        <Route path='/login' element={<Public element={<Login />} />} />
      </Routes>
    </ContextProvider>
  )
}
export default App;