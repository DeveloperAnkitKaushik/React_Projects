import React, { useState } from 'react'

const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const inputEvent = (event) => {
    const {name, value} = event.target;
    setNote((prevDate)=> {
      return {
        ...prevDate,
        [name]: value,
      }
    });
  }; 
  const addNote = (event) => {
    event.preventDefault()
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <>
    <div className="main_note">
        <form action="">
            <input type="text" name="title" id="" placeholder='Title' autoComplete='off' onChange={inputEvent} value = {note.title}/>
            <textarea name="content" id="" placeholder='Write a note' value={note.content} onChange={inputEvent}></textarea>
            <button className='btn' onClick={addNote}> <i className="fa-solid fa-plus"></i> </button>
        </form>
    </div>
    </>
  )
}

export  default CreateNote;