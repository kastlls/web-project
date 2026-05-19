import { Link } from "react-router-dom"

function TrainCard({ train }) {
  return (
    <div className="card">
      <h3>Train {train.number}</h3>

      <p>
        {train.from} → {train.to}
      </p>

      <p>Departure: {train.departure}</p>
      <p>Duration: {train.duration}</p>

      <Link to={`/booking/${train.id}`}>
        <button>Book ticket</button>
      </Link>
    </div>
  )
}

export default TrainCard