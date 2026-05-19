import { Link } from "react-router-dom"
import styles from "./TrainCard.module.css"

function TrainCard({ train }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.trainNumber}>Потяг № {train.number}</h3>

      <p className={styles.info}>
        <strong>Маршрут:</strong> {train.from} → {train.to}
      </p>

      <p className={styles.info}><strong>Відправлення:</strong> {train.departure}</p>
      <p className={styles.info}><strong>Тривалість:</strong> {train.duration}</p>

      <Link to={`/booking/${train.id}`}>
        <button className={styles.btn}>Обрати місця</button>
      </Link>
    </div>
  )
}

export default TrainCard