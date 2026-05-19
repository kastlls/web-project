import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import "react-toastify/dist/ReactToastify.css" // Імпорт дефолтних стилів тостів

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking/:trainId" element={<Booking />} />
      </Routes>
      
      {/* Контейнер, який буде рендерити гарні сповіщення */}
      <ToastContainer position="top-right" autoClose={4000} theme="colored" />
    </>
  )
}

export default App