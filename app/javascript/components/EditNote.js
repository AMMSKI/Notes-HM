import React from "react"

const EditNote = (props) => {
  return (
    <div>
      <h1>Form</h1>
      <a href="/notes">back</a>
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