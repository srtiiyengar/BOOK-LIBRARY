import { Component, OnInit,Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialog } from '@angular/material/dialog';
import { BooksShowcaseComponent } from '../books-showcase/books-showcase.component';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
public data:Array<any>;
public title:String;
  constructor(private apiService:ApiService,public dialog: MatDialog) {
  // this.data = new Array<any>();
   }
   openDialog(book): void {
    const dialogRef = this.dialog.open(BooksShowcaseComponent, {
      width: '500px',
      height:'500px',
      data: book
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit(): void {
this.apiService.getBooks().subscribe(data=>{
  console.log(data.items);
this.data = data.items;
  console.log(JSON.stringify(data.items[0].volumeInfo.title));
  this.title = JSON.stringify(data.items[0].volumeInfo.title)
    });
  }
}
