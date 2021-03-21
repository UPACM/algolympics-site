import React from "react"
import "./finals-scoreboard.scss"

import finalsData from "../../data/finals-scoreboard.json"

function ScoreBox({ penalty, tries }) {
  let checkClass = ""
  if (penalty > 0) {
    checkClass = " ac"
  } else if (penalty === 0 && tries > 0) {
    checkClass = " wa"
  } else {
    checkClass = ""
  }
  return (
    <td className={"item-score mobile-invisible" + checkClass}>
      <p className="prob-penalty">{tries === 0 ? "" : penalty === 0 ? <>&nbsp;</> : penalty}</p>
      <p className="tries">{tries === 0 ? "" : `${tries} ${tries === 1 ? "try" : "tries"}`}</p>
    </td>
  )
}

function Scoreboard({ title, problems, scores }) {
  return (
    <>
      <h1 className="table-title finals">{title}</h1>
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
              <tr key={scoreEntry["cfname"]} className="score-entry">
                <td className="rank">{scoreEntry.rank}</td>
                <td className="name">
                  <p className="cf-name">{scoreEntry["cfname"]}</p>
                  <p className="school">{scoreEntry.school}</p>
                </td>
                <td className="score">
                  <p className="total-score">{scoreEntry.solved}</p>
                  <p className="penalty">{scoreEntry.penalty}</p>
                </td>
                {scoreEntry.scores.map(probScore => {
                  return <ScoreBox key={probScore.probletter} penalty={probScore.penalty} tries={probScore.tries} />
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default function FinalsScoreboard() {
  return (
    <div id="finals-scoreboard">
      <Scoreboard
        title="Finals Scoreboard"
        scores={finalsData.scoreboard}
        problems={finalsData.problems}
      />
    </div>
  )
}
