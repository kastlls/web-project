import { useState } from "react"
import trains from "../data/trains"
import TrainList from "../components/TrainList"
import styles from "./Home.module.css"

function Home() {
  const [search, setSearch] = useState("")

  const filtered = trains.filter((train) => {
    // Розбиваємо пошуковий запит на окремі слова та прибираємо зайві пробіли
    const searchWords = search.toLowerCase().trim().split(/\s+/)
    
    // Створюємо один суцільний рядок з даних потяга для зручного пошуку
    const trainInfo = `${train.number} ${train.from} ${train.to}`.toLowerCase()

    // Потяг підходить, якщо КОЖНЕ слово з пошуку є в цьому рядку
    return searchWords.every((word) => trainInfo.includes(word))
  })

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Система бронювання квитків</h1>

      <input
        className={styles.searchInput}
        placeholder="Пошук потяга, міста відправлення або прибуття..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TrainList trains={filtered} />
    </div>
  )
}

export default Home