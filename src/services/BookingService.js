const STORAGE_KEY = "train_bookings";

const BookingService = {
  getAllBookings() {
    const bookings = localStorage.getItem(STORAGE_KEY);
    return bookings ? JSON.parse(bookings) : [];
  },

  saveBooking(bookingData) {
    const bookings = this.getAllBookings();
    const newBooking = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      ...bookingData
    };
    bookings.push(newBooking);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
    return newBooking;
  },

  getBookedSeats(trainId, wagonNumber) {
    const bookings = this.getAllBookings();
    const filtered = bookings.filter(
      (b) => b.trainId === parseInt(trainId) && b.wagonNumber === parseInt(wagonNumber)
    );
    return filtered.reduce((acc, curr) => acc.concat(curr.seats), []);
  }
};

export default BookingService;