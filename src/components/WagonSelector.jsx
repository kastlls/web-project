import { useBooking } from "../context/BookingContext"
import styles from "./WagonSelector.module.css"

function WagonSelector() {
  const { selectedTrain, selectedWagon, setSelectedWagon, setSelectedSeats } = useBooking()

  if (!selectedTrain || !selectedTrain.wagons) return null

  const handleWagonChange = (wagonNum) => {
    setSelectedWagon(wagonNum)
    setSelectedSeats([]) // Скидаємо вибрані місця при переході в інший вагон
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Оберіть вагон:</h3>
      <div className={styles.wagonList}>
        {selectedTrain.wagons.map((wagonNum) => (
          <button
            key={wagonNum}
            className={`${styles.wagonBtn} ${selectedWagon === wagonNum ? styles.active : ""}`}
            onClick={() => handleWagonChange(wagonNum)}
          >
            Вагон {wagonNum}
          </button>
        ))}
      </div>
    </div>
  )
}

export default WagonSelector