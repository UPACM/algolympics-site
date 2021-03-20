import React, { useState, useEffect } from "react"

import "./countdown.scss"
import contestDetails from "../../data/details.json"

const calculateTimeLeft = () => {
  let deadline = +new Date(`${contestDetails.eventDeadline}`)
  let currrentTime = +new Date()
  // if the event has started,
  if (deadline < currrentTime) {
    deadline = +new Date(`${contestDetails.eventEndDeadline}`)
  }
  const difference = deadline - +new Date()
  let timeLeft = {
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  }
  if (difference > 0) {
    let formattedSeconds = String(Math.floor((difference / 1000) % 60))
    if (formattedSeconds.length < 2) {
      formattedSeconds = "0" + formattedSeconds
    }
    let formattedMinutes = String(Math.floor((difference / 1000 / 60) % 60))
    if (formattedMinutes.length < 2) {
      formattedMinutes = "0" + formattedMinutes
    }
    let formattedHours = String(
      Math.floor((difference / (1000 * 60 * 60)) % 24)
    )
    if (formattedHours.length < 2) {
      formattedHours = "0" + formattedHours
    }

    timeLeft = {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    }
  }
  return timeLeft
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
  const [headerText, setHeaderText] = useState("starts in")
  const [timerColor, setTimerColor] = useState("green")

  useEffect(() => {
    let eventTime = +new Date(`${contestDetails.eventDeadline}`)
    let currentTime = +new Date()
    // if the event has started,
    if (eventTime < currentTime) {
      setHeaderText("ends in")
      setTimerColor("yellow")
      eventTime = +new Date(`${contestDetails.eventEndDeadline}`)
      if (eventTime < currentTime) {
        setHeaderText("is over")
        setTimerColor("red")
      }
    }

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className="countdown-section">
      <h1 className="label">Algolympics Finals {headerText}</h1>
      <h1 className="timer">
        <span className={"counter days " + timerColor}>
          {timeLeft.days}
          <span className="label">D</span>
        </span>
        <span className={"counter hours " + timerColor}>
          {timeLeft.hours}
          <span className="label">H</span>
        </span>
        <span className={"counter minutes " + timerColor}>
          {timeLeft.minutes}
          <span className="label">M</span>
        </span>
        <span className={"counter seconds " + timerColor}>
          {timeLeft.seconds}
          <span className="label">S</span>
        </span>
      </h1>
    </div>
  )
}
