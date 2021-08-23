import React from "react"

const Note = (props) => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightblue", border: "7px solid", padding: "40px", margin: "40px" }}>
      <h1>{props.note.title}</h1>
      <h6>{props.note.description}</h6>
      <a style={{textDecoration: "none"}} href={`/notes`}>Back</a>
    </div>
  )
}

export default Note