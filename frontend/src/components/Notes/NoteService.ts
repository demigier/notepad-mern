import axios from 'axios'
import { Note } from './Note';

const API = /*'http://192.168.0.133:4000' || */ 'http://localhost:4000';

export const getNotes = async () =>{
    return await axios.get<Note[]>(`${API}/notes`);
}

export const createNote = async (note: Note) =>{
    return await axios.post(`${API}/notes`, note);
}

export const getNote = async (id: string) =>{
    return await axios.get<Note>(`${API}/notes/${id}`);
}

export const searchNote = async (title: string) =>{
    return await axios.get<Note>(`${API}/notes/search?t=${title}`);
}

export const updateNote = async (id:string, note: Note) =>{
    return await axios.put(`${API}/notes/${id}`, note);
}

export const deleteNote = async (id: string) =>{
    return await axios.delete<Note>(`${API}/notes/${id}`);
}