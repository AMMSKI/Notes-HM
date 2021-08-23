import React from "react"

const EditNote = (props) => {
  return (
    <div style={{ textAlign: "center", backgroundColor: "lightblue", border: "7px solid", padding: "40px", margin: "40px" }}>
      <h1>Edit Note</h1>
      <a style={{textDecoration: "none"}} href="/notes">Back</a>
      <form action={`/notes/${props.note.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Title</p>
        <input defaultValue={props.note.title} name="note[title]" />
        <p>Discription</p>
        <input defaultValue={props.note.description} name="note[author]" />
        <button type="submit">update</button>
      </form>
    </div>
  )
}

export default EditNote