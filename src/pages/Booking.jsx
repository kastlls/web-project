import { useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useBooking } from "../context/BookingContext"
import trains from "../data/trains"

function Booking() {
  const { trainId } = useParams()
  const { selectedTrain, setSelectedTrain, selectedWagon, setSelectedWagon, setSelectedSeats } = useBooking()

  useEffect(() => {
    // Знаходимо потяг за ID з URL
    const train = trains.find((t) => t.id === parseInt(trainId))
    setSelectedTrain(train)
    
    // Скидаємо вибраний вагон та місця при зміні потяга
    setSelectedWagon(1)
    setSelectedSeats([])
  }, [trainId, setSelectedTrain, setSelectedWagon, setSelectedSeats])

  if (!selectedTrain) {
    return <h2>Потяг не знайдено або завантажується...</h2>
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Назад до списку потягів</Link>
      
      <h2>Бронювання квитків на потяг №{selectedTrain.number}</h2>
      <p>Маршрут: {selectedTrain.from} — {selectedTrain.to}</p>
      <p>Відправлення: {selectedTrain.departure}</p>

      {/* Сюди ми згодом вставимо WagonSelector, SeatMap та BookingForm */}
      <div style={{ marginTop: "20px", border: "1px dashed #ccc", padding: "20px" }}>
        <h3>Тут будуть інтерактивна схема та форма (Лабораторна 10)</h3>
      </div>
    </div>
  )
}

export default Booking