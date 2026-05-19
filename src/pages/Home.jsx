import { useState } from "react"
import trains from "../data/trains"
import TrainList from "../components/TrainList"

function Home() {
  const [search, setSearch] = useState("")

  const filtered = trains.filter((t) =>
    t.number.toLowerCase().includes(search.toLowerCase()) ||
    t.from.toLowerCase().includes(search.toLowerCase()) ||
    t.to.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Train Booking System</h1>

      <input
        placeholder="Search train / route"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TrainList trains={filtered} />
    </div>
  )
}

export default Home