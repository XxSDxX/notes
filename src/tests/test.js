import { NoteDriverJson } from "../frameworksDrivers/NoteDriver.js";
import { NoteRepository } from "../interfaceAdapters/repositories/NoteRepository.js";
import { NoteController } from "../interfaceAdapters/controllers/NoteController.js";
import { CreateNoteUseCase } from "../usecases/CreateNoteUseCase.js";
import { SaveNoteUseCase } from "../usecases/SaveNoteUseCase.js";


const noteDriverJson = new NoteDriverJson('../../database/notes.json');
const noteRepository = new NoteRepository(noteDriverJson);

const createNoteUseCase = new CreateNoteUseCase();
const saveNoteUseCase = new SaveNoteUseCase(noteRepository)

const noteController = new NoteController(createNoteUseCase, saveNoteUseCase);

// the test
const testnote = noteController.createNote('The Nice Title', 'Some lorem ipsum', '12.02.2025', 123);
noteController.saveNote(testnote);

const test = null;

export {test};