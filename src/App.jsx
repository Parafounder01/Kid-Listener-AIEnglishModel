import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import GradeSelect from './pages/GradeSelect.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 font-kid">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grades" element={<GradeSelect />} />
      </Routes>
    </div>
  )
}

export default App
