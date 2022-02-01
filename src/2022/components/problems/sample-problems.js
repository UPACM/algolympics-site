import React from "react"

import "./sample-problems.scss"

import contestDetails from "../../data/details.json"

function SampleProblem({ name, link, background }) {
  return (
    <a className="sample-problem" href={link}>
      <span>{name}</span>
    </a>
  )
}

export default function SampleProblems() {
  return (
    <div id="sample-problems-section" className="incompressible">
      <h1>Sample Problems</h1>
      <div id="samples">
        {contestDetails.problems.samples.map(sample => {
          return (
            <SampleProblem
              key={sample.name}
              name={sample.name}
              link={sample.link}
              background={sample.background}
            />
          )
        })}
      </div>
    </div>
  )
}
