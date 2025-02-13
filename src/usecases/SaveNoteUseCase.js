export class SaveNoteUseCase {
    constructor(repository, noteValidatorService) {
        this.repository = repository;
        this.noteValidatorService = noteValidatorService;
    }

    async execute(note) {
        const noteIsOk = await this.noteValidatorService.validate(note);
        if(!noteIsOk) {
            console.log('something wrong with note', note);
            return;
        }
        this.repository.save(note)
    }
}