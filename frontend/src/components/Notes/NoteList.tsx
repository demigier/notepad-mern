import React, { useEffect, useState } from 'react'
import {Note} from './Note'
import * as NoteService from './NoteService'
import {NoteItem} from './NoteItem'

export const NoteList = () => {

    const [notes, setNotes] = useState<Note[]>([]);

    const loadNotes = async () =>{
        const res = await NoteService.getNotes()

        const formatedNotes = res.data.map(note =>{
            return{
                ...note,
                createdAt: note.createdAt ? new Date(note.createdAt): new Date() 
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

        setNotes(formatedNotes);
    }

    useEffect(() => {
        loadNotes();
    }, [])

    return (
        <div className="row">
            {notes.map((note) => {
                return <NoteItem note={note} key={note._id} loadNotes={loadNotes}/>
            })}
        </div>
    )
}
