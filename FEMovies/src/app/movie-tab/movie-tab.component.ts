
import { Component, OnInit, } from '@angular/core';
import {  MatTableDataSource  } from '@angular/material/table';
import {  MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { TableElement } from '../interface/tableElement';
import { MoviesService } from '../services/movies.service';

 @Component({
  selector: 'app-movie-tab',
  templateUrl: './movie-tab.component.html',
  styleUrls: ['./movie-tab.component.css']
})

export class MovieTabComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'category', 'premiere', 'actions'];
  movieTable: TableElement[] = [];
  dataSource = new MatTableDataSource(this.movieTable);

  constructor(public dialog: MatDialog, private _movieService: MoviesService) {}

  openDialog(id: number, title:string, author:string, category:string, premiere:string,) {
    
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {id: id, title: title, author: author, category: category, premiere: premiere},
      width: '80%',
      height: '80%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies() {
    this._movieService.getListMovies().subscribe((data: TableElement[]) => {
      this.movieTable = data;
      this.dataSource = new MatTableDataSource(this.movieTable);
    })
  }

  del(id: number) {
    this._movieService.deleteMovie(id).subscribe(() => {
      this.getMovies();
    })
  }
}
