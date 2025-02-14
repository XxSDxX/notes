export class NoteController {
    constructor(createNoteUseCase, saveNoteUseCase, getAllNotesUseCase) {
        this.createNoteUseCase = createNoteUseCase;
        this.saveNoteUseCase = saveNoteUseCase;
        this.getAllNotesUseCase = getAllNotesUseCase;
    }

    createNote(title, content, date, id) {
        return this.createNoteUseCase.create(title, content, date, id);
    }

    saveNote(note) {
        this.saveNoteUseCase.execute(note)
    }

    getNotes() {
        return this.getAllNotesUseCase.execute();
    }
}