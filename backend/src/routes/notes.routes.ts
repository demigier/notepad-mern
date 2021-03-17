import {Router} from 'express'; 
const router = Router();

import * as noteCtrl from './notes.controller'

//SETS EACH ROUT
router.get('/notes', noteCtrl.getNotes);
router.get('/notes/search', noteCtrl.searchNotes);
router.get('/notes/:id', noteCtrl.getNote);
router.post('/notes', noteCtrl.createNote);
router.delete('/notes/:id', noteCtrl.deleteNote);
router.put('/notes/:id', noteCtrl.updateNote);

export default router;
