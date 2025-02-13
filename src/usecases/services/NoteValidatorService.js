export class NoteValidatorService {
    constructor(noteRepository) {
        this.noteRepository = noteRepository;
    }

    async validate(note) {
        const similarNoteIdExists =  await this.findSimilarNoteId(note.id);
        if(similarNoteIdExists) {
            console.warn('note with id', note.id, 'already exists');
            return false;
        }

        return true; // everything's ok :thumb:
    }

    async findSimilarNoteId(id) {
        const allNotes = await this.noteRepository.getAll();
        return allNotes.find(note => note.id == id) ? true : false;
    }
}