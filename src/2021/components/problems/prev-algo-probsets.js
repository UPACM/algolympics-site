import React from "react"

import "./prev-algo-probsets.scss"

import contestDetails from "../../data/details.json"

function ProbSet({
  year,
  problems,
  solutionSketches,
  solutions,
  codeSolutions,
}) {
  var fileDir = "/" + year + "/problems/"
  var problems_dir = fileDir + problems
  var no_problems = ""
  var solutions_dir = fileDir + solutions
  var no_solutions = ""
  var solutionSketches_dir = fileDir + solutionSketches
  var no_solutionSketches = ""
  var codeSolutions_dir = fileDir + codeSolutions
  var no_codeSolutions = ""
  if (problems === "") {
    problems_dir = ""
    no_problems = "unavailable"
  }
  if (solutions === "") {
    solutions_dir = ""
    no_solutions = "unavailable"
  }
  if (solutionSketches === "") {
    solutionSketches_dir = ""
    no_solutionSketches = "unavailable"
  }
  if (codeSolutions === "") {
    codeSolutions_dir = ""
    no_codeSolutions = "unavailable"
  }

  return (
    <div className="probset">
      <h2>Algolympics {year}</h2>
      <a href={problems_dir} className={"problems " + no_problems}>
        Problems
      </a>
      <a
        href={solutionSketches_dir}
        className={"solution-sketches " + no_solutionSketches}
      >
        Solution Sketches
      </a>
      <a href={solutions_dir} className={"solutions " + no_solutions}>
        Solutions
      </a>
      <a
        href={codeSolutions_dir}
        className={"code-solutions " + no_codeSolutions}
      >
        Code Solutions
      </a>
    </div>
  )
}

export default function PrevAlgoProbsets() {
  let prev_probsets = [...contestDetails.problems.previous]
  prev_probsets.sort((a, b) => {
    if (a.year < b.year) {
      return 1
    } else if (a.year > b.year) {
      return -1
    } else {
      return 0
    }
  })

  return (
    <div id="prev-algo-probsets-section" className="incompressible">
      <h1>Previous Problem Sets</h1>
      <div id="probsets">
        {prev_probsets.map(probset => {
          return (
            <ProbSet
              key={probset.year}
              year={probset.year}
              problems={probset.problems}
              solutionSketches={probset.solutionSketches}
              solutions={probset.solutions}
              codeSolutions={probset.codeSolutions}
            />
          )
        })}
      </div>
    </div>
  )
}
