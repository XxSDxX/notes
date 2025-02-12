export class NoteController {
    constructor(createNoteUseCase, saveNoteUseCase) {
        this.createNoteUseCase = createNoteUseCase;
        this.saveNoteUseCase = saveNoteUseCase;
    }

    createNote(title, content, date, id) {
        return this.createNoteUseCase.create(title, content, date, id);
    }

    saveNote(note) {
        this.saveNoteUseCase.execute(note)
    }
}