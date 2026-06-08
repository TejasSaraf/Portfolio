import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './components/About'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 antialiased">
        <div className="flex flex-1 flex-col">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
