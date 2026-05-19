import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"
import trains from "../data/trains"
import WagonSelector from "../components/WagonSelector"
import SeatMap from "../components/SeatMap"
import BookingForm from "../components/BookingForm" // Додали імпорт форми

function Booking() {
  const { trainId } = useParams()
  const { selectedTrain, setSelectedTrain, setSelectedWagon, setSelectedSeats } = useBooking()

  useEffect(() => {
    const train = trains.find((t) => t.id === parseInt(trainId))
    setSelectedTrain(train)
    setSelectedWagon(1)
    setSelectedSeats([])
  }, [trainId, setSelectedTrain, setSelectedWagon, setSelectedSeats])

  if (!selectedTrain) {
    return <h2 style={{ padding: "20px" }}>Потяг не знайдено...</h2>
  }

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <Link to="/" style={{ color: "#005bbb", textDecoration: "none", fontWeight: "bold" }}>
        ← Назад до списку потягів
      </Link>
      
      <h2 style={{ marginTop: "20px", color: "#333" }}>Бронювання квитків на потяг № {selectedTrain.number}</h2>
      
      <div style={{ background: "#f9f9f9", padding: "15px", borderRadius: "8px", marginBottom: "20px" }}>
        <p style={{ margin: "5px 0" }}><strong>Маршрут:</strong> {selectedTrain.from} → {selectedTrain.to}</p>
        <p style={{ margin: "5px 0" }}><strong>Відправлення:</strong> {selectedTrain.departure}</p>
        <p style={{ margin: "5px 0" }}><strong>Час у дорозі:</strong> {selectedTrain.duration}</p>
      </div>

      {/* Рендеримо селектор вагонів */}
      <WagonSelector />

      {/* Рендеримо інтерактивну мапу місць */}
      <SeatMap />

      {/* Замінили пунктирну заглушку на реальну форму бронювання */}
      <BookingForm />
    </div>
  )
}

export default Booking