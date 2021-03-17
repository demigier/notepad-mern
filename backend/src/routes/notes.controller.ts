import {RequestHandler} from 'express';
import Note from './Note'

export const getNotes: RequestHandler = async (req, res) => {
    try {
        const notes = await Note.find();
        return res.json(notes);
    } catch (error) {
        return res.json(error);
    }
}

export const createNote: RequestHandler = async (req, res) => {
    const noteFound = await Note.findOne({title: req.body.title});
    if(noteFound)
        return res.status(301).json({messaje: 'The title already exists'})
    const note = new Note(req.body)
    const savedVideo = await note.save();
    res.json(savedVideo);
}

export const getNote: RequestHandler = async (req, res) => {
    try {
        const noteFound = await Note.findById(req.params.id);
        return res.json(noteFound);
    } catch (error) {
        return res.json('Note not found');
    }
}

export const deleteNote: RequestHandler = async (req, res) => {
    try {
        const noteFound = await Note.findByIdAndDelete(req.params.id);
        return res.json(noteFound);
    } catch (error) {
        return res.json('Note not found');
    }    
}

export const updateNote: RequestHandler = async (req, res) => {
    try {
        const noteUpdated = await Note.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(noteUpdated)
    } catch (error) {
        return res.json('Note not found');
    }
}

export const searchNotes: RequestHandler = async (req, res) => {
    try {
        const note = await Note.findOne({"title": req.query.t});
        return res.json(note);
    } catch (error) {
        return res.json('Notes not found: ' + req.query.t);
    }
}