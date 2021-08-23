import React from 'react'

const Notes = (props) => {
  const renderNotes = () => {
    return props.notes.map((note) => {
      return (
        <div style={{ textAlign: "center", backgroundColor: "lightblue", border: "7px solid", padding: "40px", margin: "40px" }}>
            <h1>{note.title}</h1>
            <h6>{note.description}</h6>
            <a style={{textDecoration: "none"}} href={`/notes/${note.id}`}>Show    </a>
            <a style={{textDecoration: "none"}} href={`/notes/${note.id}/edit`}>Edit     </a>
            <a style={{textDecoration: "none"}} href={`/notes/${note.id}`} data-method="delete">Delete     </a>
        </div>
      )
    })
  }
  return (
    <div style={{textAlign: "center"}}>
      <h1>Notes</h1>
      <a style={{textDecoration: "none"}} href="/notes/new">New Note</a>
      {renderNotes()}
    </div>
  )
}

export default Notes