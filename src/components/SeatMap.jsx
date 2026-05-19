import { useEffect } from "react"
import { useBooking } from "../context/BookingContext"
import BookingService from "../services/BookingService" // Імпорт без фігурних дужок
import styles from "./SeatMap.module.css"

function SeatMap() {
  const { selectedTrain, selectedWagon, selectedSeats, setSelectedSeats, bookedSeats, setBookedSeats } = useBooking()

  const totalSeats = 24

  useEffect(() => {
    if (selectedTrain) {
      const seats = BookingService.getBookedSeats(selectedTrain.id, selectedWagon)
      setBookedSeats(seats)
    }
  }, [selectedTrain, selectedWagon, setBookedSeats])

  const handleSeatClick = (seatNumber) => {
    if (bookedSeats.includes(seatNumber)) return

    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Оберіть місця (Вагон {selectedWagon}):</h3>
      
      <div className={styles.legend}>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.free}`}></span> Вільне</div>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.selected}`}></span> Обране</div>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.booked}`}></span> Зайняте</div>
      </div>

      <div className={styles.grid}>
        {Array.from({ length: totalSeats }, (_, i) => {
          const seatNumber = i + 1
          const isBooked = bookedSeats.includes(seatNumber)
          const isSelected = selectedSeats.includes(seatNumber)

          let seatClass = styles.freeSeat
          if (isBooked) seatClass = styles.bookedSeat
          else if (isSelected) seatClass = styles.selectedSeat

          return (
            <button
              key={seatNumber}
              className={`${styles.seat} ${seatClass}`}
              onClick={() => handleSeatClick(seatNumber)}
              disabled={isBooked}
            >
              {seatNumber}
            </button>
          )
        })}
      </div>

      {selectedSeats.length > 0 && (
        <p className={styles.summary}>
          Обрано місць: <strong>{selectedSeats.length}</strong> (№ {selectedSeats.join(", ")})
        </p>
      )}
    </div>
  )
}

export default SeatMap