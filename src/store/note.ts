import {
  makeAutoObservable,
  IObservableArray,
  autorun,
  observable,
} from "mobx";
import { decode } from "../utils/decode";
import * as t from "io-ts";

const LOCAL_STORAGE_KEY = "store";

const NoteValidator = t.type({
  id: t.string,
  title: t.string,
  completed: t.boolean,
});

const NotesArrayValidator = t.array(NoteValidator);

export type Note = t.TypeOf<typeof NoteValidator>;

class NotesStore {
  notes: IObservableArray<Note> = observable([]);

  constructor() {
    makeAutoObservable(this);
    this.readFromLocalStorage();
    autorun(() => this.saveToLocalStorage());
  }

  async readFromLocalStorage() {
    try {
      const storedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!storedValue) return;

      const storedNotes = await decode(
        JSON.parse(storedValue),
        NotesArrayValidator,
        "Ошибка чтения ноутов из ls"
      );

      this.setNotes(storedNotes);
    } catch (e) {
      alert(e);
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.notes));
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
    this.notes.replace(this.notes.filter((note) => note.id !== id));
  }

  completeNote(id: string) {
    this.notes.replace(
      this.notes.map((note) =>
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  }

  updateNoteTitle(id: string, newTitle: string) {
    this.notes.replace(
      this.notes.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  }

  setNotes(v: Note[]) {
    this.notes.replace(v);
  }
}

export default  new NotesStore();