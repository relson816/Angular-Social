import { Component, Input } from '@angular/core';

import { NoteService } from '../note.service';

import { Note } from '../note-model';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {

  @Input()
  note: Note;

  constructor(private noteService: NoteService) { }

  addHeartToNote(val: number) {
    if (this.note.id) {
      this.noteService.updateNote(this.note.id, { hearts: val + 1 });
    } else {
      console.error('Note missing ID!');
    }
  }

    disHeartToNote(val: number) {
    if (this.note.id && (val > 0)) {
      this.noteService.updateNote(this.note.id, { hearts: val - 1});
    } else {
      console.error('Note missing ID!');
    }
  }

  deleteNote(id: string) {
    this.noteService.deleteNote(id);
  }

  updateNote() {
   // const date = new Date().getTime();
    //this.noteSvc.updateItem(this.note.$key, { content: this.content });
  }

}
