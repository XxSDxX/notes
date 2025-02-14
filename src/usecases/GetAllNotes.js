export class GetAllNotesUseCase {
    constructor(repository) {
        this.repository = repository;
    }

    execute() {
        return this.repository.getAll();
    }
}