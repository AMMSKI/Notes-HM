import React from "react"

const NewNote = () => {
  return (
    <div>
      <h1>Form</h1>
      <a href="/notes">Back</a>
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