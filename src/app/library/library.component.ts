import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  userFavBooks: any[];
  userFavKeys: any[];
  constructor(private fs: FirebaseService) { }

  ngOnInit(): void {
  }
  getFav() {
    console.log(this);
    const that = this;
    console.log(this.fs.userId);
    var ref = this.fs.db.database.ref(`user/${this.fs.userId}`);
    
  ref.once("value")
      .then(function (snapshot) {
        console.log(this);
        console.log(snapshot);
        console.log(snapshot.child("fav").val());
        const favBooks = snapshot.child("fav").val();
        console.log("keys", Object.keys(favBooks));
        console.log("values", Object.values(favBooks));
        that.userFavBooks = Object.values(favBooks);
        that.userFavKeys = Object.keys(favBooks);
      }).catch(error=>{
        console.log(error);
      })
     
  }
  removeBook(index){
    this.fs.db.database.ref()
    .child("user")
    .child(`${this.fs.userId}`)
    .child("fav").child(`${this.userFavKeys[index]}`).remove();
  }


}
