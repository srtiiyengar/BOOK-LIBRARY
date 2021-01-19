import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-books-showcase',
  templateUrl: './books-showcase.component.html',
  styleUrls: ['./books-showcase.component.css']
})
export class BooksShowcaseComponent implements OnInit {
  
  fav: String;
  ref: String;
  constructor(private fs: FirebaseService , public dialogRef: MatDialogRef<BooksShowcaseComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }
    id = this.fs.userId;
    onNoClick(): void {
      this.dialogRef.close();
    } 
  
  ngOnInit(): void {
    console.log(this.data);
    console.log(this.data.volumeInfo.imageLinks.thumbnail);
  }

  addToMyLibrary(){
      console.log('data pushed!');
      console.log(this.data.volumeInfo);
      this.fav = this.data.volumeInfo;
      this.fs.db.list('/root').snapshotChanges().subscribe(data=>{
        console.log(data);
        data.forEach(value=>{
          console.log(value);
          console.log(value['payload']['node_']['value_']);
          // console.log(value['payload']['key']);
          let val = value['payload']['node_']['value_'];
          this.ref = val;
          console.log(this.ref);
          
        })
      })
      this.fs.db.database.ref()
      .child("user")
      .child(`${this.fs.userId}`)
      .child("fav")
      .push(this.fav);
      this.dialogRef.close();
  }
}
