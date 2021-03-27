import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import {useHistory, useParams} from 'react-router-dom'
import { Note } from './Note'
import * as noteService from './NoteService'
import { toast } from 'react-toastify';
import { Form, Field } from "react-final-form";
import * as anim from 'react-awesome-reveal'

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string;
    title: string
}

export const NoteForm = () => {
    const history = useHistory();
    const params = useParams<Params>();

    const initialState = {
        title: '' , 
        description: ''
    }
    const [note, setNote] = useState<Note>(initialState);


    const handleInputChange = (e: InputChange) =>{
        setNote({...note, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        if(!note.title || !note.description){
            toast.error('❗ Fields cannot be null', {autoClose: 1200});
        }else{
            if(!params.id){
                createNote();
            }else{
                updateNote();
            }
        }
    }

    const searchNote = async (title: string) =>{
        const searchedNote = await noteService.searchNote(title);
        console.log(searchedNote)
        return searchedNote.data;
    }

    const createNote = async () =>{
        if(await searchNote(note.title)){
            toast.error('❗ Note already exists', {autoClose: 1200});
        }else{
            await noteService.createNote(note);
            toast.success('✔ New note added successfully', {autoClose: 1200});
            history.push('/');
        }
    }

    const updateNote = async () =>{
        await noteService.updateNote(params.id, note);
        toast.info('✔ Note updated successfully', {autoClose: 1200});
        history.push('/');
    }

    const getNote = async(id: string) => {
        const res = await noteService.getNote(id);
        const { title, description } = res.data;
        if(title == undefined){
            history.push('/error');
        }else{
            setNote({title, description});
        }
    }   

    useEffect (() => {
        initialize(params);
    }, [params])

    const initialize = (params: Params)=>{
        if (params.id){
            getNote(params.id)
        }else{
            setNote(initialState);
        }
    }

    return (
        
        <anim.JackInTheBox className="row">
            <div className="col-md-4 offset-md-4">
                <div className="card">
                    <div className="card-header bg-dark text-white text-center">
                        {
                                params.id ?
                                <h3> Update note from list</h3>
                                :
                                <h3> Add note to my list</h3>
                            }
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" name="title" placeholder="Enter here note's title" className="form-control" value={note.title} autoFocus onChange={handleInputChange}/>
                            </div>
                            <div className="form-group">
                                <textarea name="description" rows={15} className="form-control" value={note.description} placeholder="Enter here note's description" onChange={handleInputChange}></textarea>
                            </div>
                            {
                                params.id ?
                                    <button className="btn btn-info" name="update"> Update note </button>
                                :
                                    <button className="btn btn-primary" name="add"> Add note </button>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </anim.JackInTheBox>
    )
}