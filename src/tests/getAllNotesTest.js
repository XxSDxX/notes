import { NoteDriverJson } from "../frameworksDrivers/NoteDriver.js";
import { NoteRepository } from "../interfaceAdapters/repositories/NoteRepository.js";
import { NoteController } from "../interfaceAdapters/controllers/NoteController.js";
import { GetAllNotesUseCase } from "../usecases/GetAllNotes.js";

// drivers
const noteDriverJson = new NoteDriverJson('./database/notes.json');

// repositories
const noteRepository = new NoteRepository(noteDriverJson);

// usecases
const getAllNotesUseCase = new GetAllNotesUseCase(noteRepository)

// controllers
const noteController = new NoteController(null, null, getAllNotesUseCase); // <--

// the test
console.log(noteController.getNotes());

export const getAllNotesTest = null;