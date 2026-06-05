import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Nếu có hash (ví dụ: #features), thì không cuộn lên top
    // Nếu không có hash, mới cuộn lên top
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-stone-800 antialiased selection:bg-amber-200 selection:text-amber-900">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
