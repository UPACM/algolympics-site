import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons"

import "./elims-scoreboard.scss"

import elimsData from "2022/data/elims-scoreboard.json"

function ElimsScoreBox({ score }) {
  let checkClass = ""
  let icon = null
  if (score === 1) {
    checkClass = " ac"
    icon = faCheck
  } else if (score === 0) {
    checkClass = " wa"
    icon = faTimes
  } else {
    checkClass = ""
  }
  return (
    <td className={"item-score mobile-invisible" + checkClass}>
      {icon ? <FontAwesomeIcon icon={icon} /> : ""}
    </td>
  )
}

function ElimsScoreboardTable({ title, problems, scores }) {
  return (
    <>
      <h1 className="table-title">{title}</h1>
      <table className="scoreboard">
        <thead className="headers">
          <tr>
            <th>Rank</th>
            <th>CodeForces Name</th>
            <th>Score</th>
            {problems.map(problem => {
              return (
                <th key={problem} className="item-score mobile-invisible">
                  {problem}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {scores.map(scoreEntry => {
            return (
              <tr key={scoreEntry["CF Name"]} className="score-entry">
                <td className="rank">{scoreEntry.Rank}</td>
                <td className="name">
                  <p className="cf-name">{scoreEntry["CF Name"]}</p>
                  <p className="school">{scoreEntry.School}</p>
                </td>
                <td className="score">
                  <p className="total-score">{scoreEntry.Score}</p>
                  <p className="penalty">{scoreEntry.Penalty}</p>
                </td>
                {problems.map(problem => {
                  return (
                    <ElimsScoreBox key={problem} score={scoreEntry[problem]} />
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default function ElimsScoreboard() {
  return (
    <div id="elims-scoreboard">
      <ElimsScoreboardTable
        title="Eliminations Scoreboard"
        problems={elimsData.problems}
        scores={elimsData.scoreboard}
      />
    </div>
  )
}
