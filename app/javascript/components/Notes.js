import React from 'react'

const Notes = (props) => {
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
        <div style={{ border: "1px solid", margin: "40px" }}>
            <h1>{note.title}</h1>
            <h6>{note.description}</h6>
            <a href={`/notes/${note.id}`}>Show</a>
            <a href={`/notes/${note.id}/edit`}>Edit</a>
            <a href={`/notes/${note.id}`} data-method="delete">Delete</a>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Notes</h1>
      <a href="/notes/new">New Note</a>
      {renderNotes()}
    </div>
  )
}

export default Notes