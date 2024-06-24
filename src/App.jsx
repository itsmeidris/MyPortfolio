import './App.css'
import { AnimatedPinPage } from './pages/AnimatedPinPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnimatedPinPage />} />
    </Routes>
  )
}

export default App