import { createContext, useContext, useState } from "react"

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [selectedTrain, setSelectedTrain] = useState(null)
  const [selectedWagon, setSelectedWagon] = useState(1)
  const [selectedSeats, setSelectedSeats] = useState([])

  return (
    <BookingContext.Provider
      value={{
        selectedTrain,
        setSelectedTrain,
        selectedWagon,
        setSelectedWagon,
        selectedSeats,
        setSelectedSeats
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}