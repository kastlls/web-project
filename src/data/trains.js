const trains = [
  {
    id: 1,
    number: "091К",
    from: "Lviv",
    to: "Kyiv",
    departure: "2026-05-20 08:30",
    duration: "6h 40m",
    wagons: [1, 2, 3, 4]
  },
  {
    id: 2,
    number: "712Л",
    from: "Kyiv",
    to: "Odesa",
    departure: "2026-05-21 10:00",
    duration: "5h 10m",
    wagons: [1, 2, 3]
  },
  {
    id: 3,
    number: "054Д",
    from: "Kharkiv",
    to: "Lviv",
    departure: "2026-05-22 06:45",
    duration: "10h 20m",
    wagons: [1, 2, 3, 4, 5]
  },
  {
    id: 4,
    number: "128П",
    from: "Dnipro",
    to: "Kyiv",
    departure: "2026-05-22 14:15",
    duration: "4h 50m",
    wagons: [1, 2, 3]
  },
  {
    id: 5,
    number: "303Л",
    from: "Odesa",
    to: "Lviv",
    departure: "2026-05-23 09:00",
    duration: "8h 10m",
    wagons: [1, 2, 3, 4]
  },
  {
    id: 6,
    number: "219К",
    from: "Kyiv",
    to: "Kharkiv",
    departure: "2026-05-24 18:30",
    duration: "5h 30m",
    wagons: [1, 2]
  }
]

export default trains