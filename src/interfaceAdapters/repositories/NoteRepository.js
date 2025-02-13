export class NoteRepository {
    constructor(driver) {
        this.driver = driver;
    }

    async save(note) {

        // здесь можно адаптировать данные (note)
        await this.driver.save(note)
    }

    async getAll() {
        return await this.driver.getAll();
    }
}