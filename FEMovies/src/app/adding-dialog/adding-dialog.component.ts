import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableElement } from '../interface/tableElement';
import { MovieTabComponent } from '../movie-tab/movie-tab.component';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-adding-dialog',
  templateUrl: './adding-dialog.component.html',
  styleUrls: ['./adding-dialog.component.css']
})
export class AddingDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MovieTabComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TableElement,
    private _movieService: MoviesService
  ) {}

  title = '';
  author = '';
  category = '';
  premiere = '';

  ngOnInit(): void {

  }


  onNoClick(): void {
    this.dialogRef.close();
  }


  Add(){
    const newMovie: TableElement = {
      id: 0,
      title: this.title,
      author: this.author,
      category: this.category,
      premiere: this.premiere,
    }
    this._movieService.saveMovie(newMovie).subscribe(() => {
      this.dialogRef.close();
      window.location.reload();
    })
  }

}
