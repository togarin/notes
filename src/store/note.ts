import { makeAutoObservable, IObservableArray } from "mobx";

class NotesStore {
  notes: Array<Note> = [];

  constructor() {
    makeAutoObservable(this);
  }

  addNote(title: string) {
    if (!title) {
      return;
    }
    let newNote: Note = {
      id: `f${(+new Date()).toString(16)}`,
      title,
      completed: false,
    };
    this.notes.push(newNote);
  }

  removeNote(id: string) {
    (this.notes as IObservableArray).replace(this.notes.filter((note) => note.id !== id));
  }

  completeNote(id: string) {
    (this.notes as IObservableArray).replace(
      this.notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  }

  updateNoteTitle(id: string, newTitle: string) {
    (this.notes as IObservableArray).replace(
      this.notes.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  }
}
export default new NotesStore();
