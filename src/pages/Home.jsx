import { useNavigate } from 'react-router-dom'
import { Volume2 } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-6xl font-bold text-primary mb-4">🎓 EduSpeak Junior</h1>
      <p className="text-2xl text-gray-700 mb-8">English Learning for Kids</p>
      <button 
        onClick={() => navigate('/grades')}
        className="bg-secondary text-white text-3xl px-12 py-6 rounded-3xl hover:scale-105 transition"
      >
        <Volume2 className="inline mr-3" size={36} />
        Start Learning!
      </button>
    </div>
  )
}
