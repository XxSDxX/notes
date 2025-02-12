export class NoteRepository {
    constructor(driver) {
        this.driver = driver;
    }

    save(note) {

        // здесь можно адаптировать данные (note)
        this.driver.save(note)
    }
}