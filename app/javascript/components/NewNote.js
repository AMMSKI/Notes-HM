import React from "react"

const NewNote = () => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightblue", border: "7px solid", padding: "40px", margin: "40px" }}>
      <h1>Add Note</h1>
      <a style={{textDecoration: "none"}} href="/notes">Back</a>
      <form action="/notes" method="post">
        <p>Title</p>
        <input name="note[title]"/>
        <p>Discription</p>
        <input name="note[description]"/>
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default NewNote