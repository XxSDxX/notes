import fs from 'fs';

export class NoteDriverJson {
    constructor(path) {
        this.path = path;
    }

    save(note) {
        const notesArray = this.getAll();
        notesArray.push(note);
        this.saveAll(notesArray);
    }

    saveAll(array) {
        try {
            fs.writeFileSync(this.path, JSON.stringify(array));
        } catch (error) {
            throw new Error('error during saving all notes in NoteDriverJson');
        }
    }

    getAll() {
        try {
            let filedata = fs.readFileSync(this.path, {encoding: 'utf-8'});
            if(filedata == '') filedata = JSON.stringify([])
            return JSON.parse(filedata);
        } catch (error) {
            throw new Error('error during getting all notes in NoteDriverJson');
        }
    }
}