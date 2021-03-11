import React from "react"

import "./scoreboards.scss"

import elimsData from "../../data/elims-scoreboard.json"

function Scoreboard({ title, problems, scores }) {
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
                  let check_class = ""
                  if (scoreEntry[problem] === 1) {
                    check_class = " ac"
                  } else if (scoreEntry[problem] === 0) {
                    check_class = " wa"
                  }

                  return (
                    <td
                      key={problem}
                      className={"item-score mobile-invisible" + check_class}
                    >
                      {scoreEntry[problem]}
                    </td>
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

export default function Scoreboards() {
  return (
    <div id="scoreboards-section">
      <Scoreboard
        title="Eliminations Scoreboard"
        problems={elimsData.problems}
        scores={elimsData.scoreboard}
      />
    </div>
  )
}
