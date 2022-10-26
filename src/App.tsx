import { useState } from 'react'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

import './styles/global.css'

function App() {
  const [page, setPage] = useState('login')

  const renderPage = () => {
    switch (page) {
      case 'login':
        return <Login onEnter={() => setPage('home')} />
      case 'home':
        return <Home />
    }
  }
  return <div className="w-full h-full">{renderPage()}</div>
}

export default App
