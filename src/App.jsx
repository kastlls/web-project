import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Booking from "./pages/Booking" // Додав імпорт

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking/:trainId" element={<Booking />} /> {/* Новий маршрут */}
    </Routes>
  )
}

export default App