import express from 'express';

// import controllers and abstractions for it;
import { NoteController } from '../../../interfaceAdapters/controllers/NoteController.js';
import { GetAllNotesUseCase } from '../../../usecases/GetAllNotes.js';
// repo for usecases
import { NoteRepository} from '../../../interfaceAdapters/repositories/NoteRepository.js';
// driver for repo
import { NoteDriverJson } from '../../drivers/NoteDriver.js';

const noteDriverJson = new NoteDriverJson('./database/notes.json')
const noteRepository = new NoteRepository(noteDriverJson);
const getallNotesUseCase = new GetAllNotesUseCase(noteRepository)
const noteController = new NoteController(null, null, getallNotesUseCase)



const router = new express.Router();
router.get('/notes', async (req, res) => {
    const notes = await noteController.getNotes();
    res.send(JSON.stringify(notes))
});

export {router};