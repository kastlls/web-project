import { useState } from "react"
import { useBooking } from "../context/BookingContext"
import BookingService from "../services/BookingService" // Імпорт без фігурних дужок
import styles from "./BookingForm.module.css"

function BookingForm() {
  const { selectedTrain, selectedWagon, selectedSeats, setSelectedSeats, setBookedSeats } = useBooking()
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" })
  const [errors, setErrors] = useState({})

  if (selectedSeats.length === 0) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Будь ласка, вкажіть ім'я"
    
    const phoneRegex = /^\+?[38]?0\d{9}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Будь ласка, вкажіть номер телефону"
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone = "Некоректний формат (наприклад: 0951234567)"
    }

    const emailRegex = /\S+@\S+\.\S+/
    if (!formData.email.trim()) {
      newErrors.email = "Будь ласка, вкажіть email"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Некоректний формат email"
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const bookingData = {
      trainId: selectedTrain.id,
      wagonNumber: selectedWagon,
      seats: selectedSeats,
      passenger: formData
    }

    BookingService.saveBooking(bookingData)

    const updatedSeats = BookingService.getBookedSeats(selectedTrain.id, selectedWagon)
    setBookedSeats(updatedSeats)
    
    alert(
      `Успішно заброньовано!\n` +
      `Потяг: № ${selectedTrain.number} (${selectedTrain.from} → ${selectedTrain.to})\n` +
      `Вагон: № ${selectedWagon}\n` +
      `Місця: ${selectedSeats.join(", ")}\n` +
      `Пасажир: ${formData.name}`
    )
    
    setSelectedSeats([])
    setFormData({ name: "", phone: "", email: "" })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Оформлення квитка</h3>
      
      <div style={{ marginBottom: "15px", fontSize: "0.95rem", color: "#555" }}>
        Ви бронюєте <strong>{selectedSeats.length}</strong> місць у <strong>вагоні №{selectedWagon}</strong>
      </div>

      <div className={styles.inputGroup}>
        <label>Ім'я та Прізвище</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Іван Іванов"
        />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label>Номер телефону</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="0951234567"
        />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.inputGroup}>
        <label>Email адреса</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ivan@example.com"
        />
        {errors.email && <span className={styles.error}>{errors.email}</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>
        Підтвердити бронювання
      </button>
    </form>
  )
}

export default BookingForm