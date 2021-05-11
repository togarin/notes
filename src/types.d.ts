
interface Note {
  id: string;
  title: string;
  completed: boolean;
}

type TonSave = {
  onSave: (title: string) => Note.title;
};

type TEditingNote = {
  
}

type TNoteItem ={
  item: Note,
  text: Note.title,
  onComplete?: completeNote.completed,
  onDelete?: removeNote.id,
  onEdit?: updateNoteTitle.id
}

type completeNote = (selectedNote: Note) => void;

type addNote = ({ Note }) => Note;

type removeNote = ({ Note }) => Note;

type updateNoteTitle = ({ Note }) => Note;
