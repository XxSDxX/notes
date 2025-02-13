import { NoteDriverJson } from "../frameworksDrivers/NoteDriver.js";
import { NoteRepository } from "../interfaceAdapters/repositories/NoteRepository.js";
import { NoteController } from "../interfaceAdapters/controllers/NoteController.js";
import { CreateNoteUseCase } from "../usecases/CreateNoteUseCase.js";
import { SaveNoteUseCase } from "../usecases/SaveNoteUseCase.js";
import { NoteValidatorService } from "../usecases/services/NoteValidatorService.js";

// drivers
const noteDriverJson = new NoteDriverJson('./database/notes.json');

// repositories
const noteRepository = new NoteRepository(noteDriverJson);

// usecase services
const noteValidatorService = new NoteValidatorService(noteRepository);
// usecases
const createNoteUseCase = new CreateNoteUseCase();
const saveNoteUseCase = new SaveNoteUseCase(noteRepository, noteValidatorService)

const noteController = new NoteController(createNoteUseCase, saveNoteUseCase);

// the test
const testnote = noteController.createNote('The Nice Title', 'Some lorem ipsum', '13.02.2025', 321);
noteController.saveNote(testnote);

const test = null;

export {test};