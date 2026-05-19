import { useBooking } from "../context/BookingContext"
import styles from "./SeatMap.module.css"

function SeatMap() {
  const { selectedWagon, selectedSeats, setSelectedSeats } = useBooking()

  // Генеруємо 24 місця для вагону
  const totalSeats = 24

  // Імітуємо заброньовані місця (червоні), які змінюються залежно від номеру вагона
  const getBookedSeats = (wagon) => {
    if (wagon % 2 === 0) {
      return [2, 4, 8, 12, 14, 20] // для парних вагонів
    }
    return [1, 5, 9, 11, 15, 23] // для непарних вагонів
  }

  const bookedSeats = getBookedSeats(selectedWagon)

  const handleSeatClick = (seatNumber) => {
    // Якщо місце вже заброньоване кимось — нічого не робимо
    if (bookedSeats.includes(seatNumber)) return

    // Якщо місце вже обране нами — прибираємо його зі списку, інакше — додаємо
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber))
    } else {
      setSelectedSeats([...selectedSeats, seatNumber])
    }
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Оберіть місця (Вагон {selectedWagon}):</h3>
      
      {/* Легенда кольорів */}
      <div className={styles.legend}>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.free}`}></span> Вільне</div>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.selected}`}></span> Обране</div>
        <div className={styles.legendItem}><span className={`${styles.badge} ${styles.booked}`}></span> Зайняте</div>
      </div>

      {/* Сітка місць */}
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