import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AllUsers from './pages/AllUsers'
import { RegisteruserForm } from './pages/RegisteruserForm'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
// import NotFound from './pages/NotFound'


const App: React.FC = () => {
  return (
    <Router>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/user/register" element={<RegisteruserForm />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </body>
    </Router >
  )
}

export default App
