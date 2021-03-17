import React from 'react'
import { Interface } from 'readline'
import { Note } from './Note'
import {useHistory} from 'react-router-dom'
import * as NoteService from './NoteService'
import { toast } from 'react-toastify';

import './NoteItem.css'

interface Props{
    note: Note,
    loadNotes: () => void 
}

const generateDate = (note: Note)=>{
    console.log(note.createdAt)
    const newDate = note.createdAt ? new Date(note.createdAt): new Date() 
    //const transformedDate = newDate.getDay;
    return newDate.toLocaleDateString();
}


export const NoteItem = ({note, loadNotes}: Props) => {
    
    const history = useHistory();

    const handleDelete = async (id: string) =>{
        
        await NoteService.deleteNote(id);
        loadNotes();
        toast.warning(undo, {autoClose: 2000});
    }

    const undo = ()=>{
        return <div>⚠ Note deleted successfully <a onClick={handleUndo}> 🔙 </a></div> 
    }

    const handleUndo = ()=>{
        restoreNote();
    }

    const restoreNote = async ()=>{
        const res = await NoteService.createNote(note);
        loadNotes();
        toast.success('Note restored successfuly', {autoClose: 1200});
    }

    return (
        <div className="col-md-4 p-2">
            <div className="card card-body note-card" style={{cursor: 'pointer'}}>
                <div className="d-flex justify-content-between">
                    <h1 onClick={() => history.push(`/update/${note._id}`)}> {note.title} </h1>
                    <span className="text-danger" onClick={() => note._id && handleDelete(note._id)} > X </span>
                </div>
                <p onClick={() => history.push(`/update/${note._id}`)}> {note.description} </p>
                <div className="d-flex justify-content-end" onClick={() => history.push(`/update/${note._id}`)}>
                    <p> {generateDate(note)} </p>
                </div>
            </div>
        </div>
    )
}

