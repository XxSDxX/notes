import { NoteEntity } from "../entities/NoteEntity.js";

export class CreateNoteUseCase {
    create(title, content, date, id) {
        return new NoteEntity(title, content, date, id);
    }
}