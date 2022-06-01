import React from 'react'

const Note = (props) => {
    const deleteNote = () => {
        props.deleteItem(props.id);
    }
    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <div className="note_btn" onClick={deleteNote}>
                    <i className="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </>
    )
}

export default Note;