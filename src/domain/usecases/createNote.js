import { NoteEntity } from "../entities/note.js";

export class CreateNoteUsecase {
    constructor(repository) {
        this.repository = repository;
    }

    create(title, content) {
        const date = new Date().toString().split(' ').slice(0, 5).join(' ');
        return new NoteEntity(title, content, )
    }
}