import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';
import { TableElement } from '../../interface/tableElement';
import { MovieTabComponent } from '../movie-tab.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MovieTabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TableElement,
    private _movieService: MoviesService
  ) {}

  id = this.data.id;
  title = this.data.title;
  author = this.data.author;
  category = this.data.category;
  premiere = this.data.premiere;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  edit(){
    
    const editedMovie: TableElement = {
      id: this.id,
      title: this.title,
      author: this.author,
      category: this.category,
      premiere: this.premiere,
    }

    this._movieService.updateMovie(editedMovie).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    })
  }

}
