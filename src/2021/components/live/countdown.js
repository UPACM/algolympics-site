import React, { useState, useEffect } from "react"

import "./countdown.scss"
import contestDetails from "../../data/details.json"

const calculateTimeLeft = () => {
  const difference = +new Date(`${contestDetails.eventDeadline}`) - +new Date()
  let timeLeft = {}
  if (difference > 0) {
    let formatted_seconds = String(Math.floor((difference / 1000) % 60))
    if (formatted_seconds.length < 2) {
      formatted_seconds = "0" + formatted_seconds
    }
    let formatted_minutes = String(Math.floor((difference / 1000 / 60) % 60))
    if (formatted_minutes.length < 2) {
      formatted_minutes = "0" + formatted_minutes
    }
    let formatted_hours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    )
    if (formatted_hours.length < 2) {
      formatted_hours = "0" + formatted_hours
    }

    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: formatted_hours,
      minutes: formatted_minutes,
      seconds: formatted_seconds,
    }
  }
  return timeLeft
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <div className="countdown-section">
      <h1 className="label">Algolympics Finals</h1>
      <h1 className="timer">
        <span className="days red">
          {timeLeft.days}
          <span className="label">D</span>
        </span>
        <span className="days yellow">
          {timeLeft.hours}
          <span className="label">H</span>
        </span>
        <span className="minutes green">
          {timeLeft.minutes}
          <span className="label">M</span>
        </span>
        <span className="seconds blue">
          {timeLeft.seconds}
          <span className="label">S</span>
        </span>
      </h1>
    </div>
  )
}
