export class SaveNoteUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    execute(note) {
        this.repository.save(note)
    }
}