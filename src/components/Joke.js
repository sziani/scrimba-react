import React from "react"

function Joke(props) {
  console.log(props);
  return (
    <div className="joke-card">
      <h3 style={{display: props.question ? "block" : "none"}}>{props.question}</h3>
      <p style={{color: !props.question && "#0000FF"}}>{props.punchLine}</p>
    </div>
  )
}

export default Joke
