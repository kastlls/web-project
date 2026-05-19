import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"
import trains from "../data/trains"
import WagonSelector from "../components/WagonSelector" // Імпортуємо селектор

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

      {/* Рендеримо наш новий селектор вагонів */}
      <WagonSelector />

      {/* На наступних кроках сюди додамо SeatMap та BookingForm */}
      <div style={{ marginTop: "30px", padding: "20px", border: "2px dashed #bbb", borderRadius: "8px", textAlign: "center", color: "#666" }}>
        <h3>Тут буде інтерактивна схема місць (SeatMap)</h3>
      </div>
    </div>
  )
}

export default Booking