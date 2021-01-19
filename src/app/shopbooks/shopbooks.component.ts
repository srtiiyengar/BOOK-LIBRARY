import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-shopbooks',
  templateUrl: './shopbooks.component.html',
  styleUrls: ['./shopbooks.component.css']
})
export class ShopbooksComponent implements OnInit {
  public data:Array<any>;
  public title:String;
  constructor(public api:ApiService,private fs:FirebaseService ) { }

  ngOnInit(): void {
    this.api.getBooks().subscribe(data=>{
      console.log(data.items);
    this.data = data.items;
      console.log(JSON.stringify(data.items[0].volumeInfo.title));
      this.title = JSON.stringify(data.items[0].volumeInfo.title)
        });
    
  }
  addToCart(index){
    this.fs.db.database.ref().child(`user/${this.fs.userId}`).child('cart').push(this.data[index].volumeInfo);
  }

}
