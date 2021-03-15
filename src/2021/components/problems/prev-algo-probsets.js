import React from "react"

import "./prev-algo-probsets.scss"

import contestDetails from "../../data/details.json"

function ProbSet({
  year,
  elimsFiles,
  finalsFiles
}) {
  var elimsFileDir = "/" + year + "/problems/elims/"
  var finalsFileDir = "/" + year + "/problems/finals/"
  
  let elimsProbs = elimsFiles.problems
  let elimsSolnSketches = elimsFiles.solutionSketches
  let elimsSolns =  elimsFiles.solutions
  let elimsCodeSolns = elimsFiles.codeSolutions

  let finalsProbs = finalsFiles.problems
  let finalsSolnSketches = finalsFiles.solutionSketches
  let finalsSolns = finalsFiles.solutions
  let finalsCodeSolns = finalsFiles.codeSolutions

  // if there is no such file,
  // no_file = "unavailable"
  // file_dir = ""
  return (
    <div className="probset">
      <h2>Algolympics {year}</h2>
      <div class="downloads">
        <div class="download-section elims">
          <h3>Elims</h3>
          <div class="files">
            <a href={elimsFileDir + elimsProbs} className={elimsProbs === "" ? "problems unavailable" : "problems"}>
              Problems
            </a>
            <a
              href={elimsFileDir + elimsSolnSketches}
              className={elimsSolnSketches === "" ? "solution-sketches unavailable" : "solution-sketches"}
            >
              Solution Sketches
            </a>
            <a href={elimsFileDir + elimsSolns} className={elimsSolns === "" ? "solutions unavailable" : "solutions"}>
              Solutions
            </a>
            <a
              href={elimsFileDir + elimsCodeSolns}
              className={elimsCodeSolns === "" ? "code-solutions unavailable" : "code-solutions"}
            >
              Code Solutions
            </a>
          </div>
        </div>
        <div class="download-section finals">
          <h3>Finals</h3>
          <div class="files">
            <a href={finalsFileDir + finalsProbs}
              className={finalsProbs === "" ? "problems unavailable" : "problems"}>
              Problems
            </a>
            <a
              href={finalsFileDir + finalsSolnSketches}
              className={finalsSolnSketches === "" ? "solution-sketches unavailable" : "solution-sketches"}
            >
              Solution Sketches
            </a>
            <a href={finalsFileDir + finalsSolns}
              className={finalsSolns === "" ? "solutions unavailable" : "solutions"}
            >
              Solutions
            </a>
            <a
              href={finalsFileDir + finalsCodeSolns}
              className={finalsCodeSolns === "" ? "code-solutions unavailable" : "code-solutions"}
            >
              Code Solutions
            </a>
          </div>
        </div>
      </div>
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
              elimsFiles={probset.elims}
              finalsFiles={probset.finals}
            />
          )
        })}
      </div>
    </div>
  )
}
