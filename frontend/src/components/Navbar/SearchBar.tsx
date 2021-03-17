import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import * as noteService from '../Notes/NoteService'
import {Link, useHistory} from 'react-router-dom'
import { Note } from '../Notes/Note';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;


export const SearchBar = () => {    

    const history = useHistory();

    const [notes, setNotes] = useState<Note[]>([]);

    useEffect(() => {
        getOptions();
    }, [])

    const getOptions = async ()=>{
        const res = await noteService.getNotes();
        setNotes(res.data);
    }

    const initialState: string = '';
    
    const [search, setSearch] = useState(initialState);

    const handleInputChange = (e: InputChange) =>{
        setSearch(e.target.value);
    }

    const onSelectTag = (e: ChangeEvent<{}>, value: string | null) =>{
        setSearch(value || "");
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const res = await noteService.searchNote(search);
        if(res.data){
            history.push(`/update/${res.data._id}`);
        }else{
            toast.error('❗ non-existent note', {autoClose: 1200})
        }
    }

    return(
        <div>
            <form className="collapse navbar-collapse" onSubmit={handleSubmit}>
                <Autocomplete onChange={(e,v) => onSelectTag(e, v)}
                    id="free-solo"
                    freeSolo
                    options={notes.map(note => note.title)}
                    renderInput={(params) => (
                        <TextField {...params} label="" margin="dense" variant="outlined" InputProps={{...params.InputProps, style: {background: 'white', width: '500px'}}} onChange={handleInputChange} placeholder="Search..."/>
                    )}
                />
                <button className="btn btn-light"> <FontAwesomeIcon icon="search" /> </button>
            </form>
        </div>
    )
}

export default SearchBar;
