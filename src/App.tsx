import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/AppRoutes'
import AppContext from './contexts/AppContext'
import { useState } from 'react'
import { Keyword } from './types/AppContext'
import AppLayout from './layouts/AppLayout'

function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  )
}

export function WrappedApp() {
  const [imageSearchKeywords, setImageSearchKeywords] = useState<Keyword[]>([])
  const [videoSearchKeywords, setVideoSearchKeywords] = useState<Keyword[]>([])

  return (
    <Router>
      <AppContext.Provider
        value={{
          imageSearchKeywords,
          videoSearchKeywords,
          setImageSearchKeywords,
          setVideoSearchKeywords,
        }}
      >
        <App />
      </AppContext.Provider>
    </Router>
  )
}

export default App
