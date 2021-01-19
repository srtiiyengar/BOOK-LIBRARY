import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
 isLoggedIn = false;
 book =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  constructor(private firebaseService: FirebaseService,
              private _router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.firebaseService.isLoggedIn.subscribe(data =>{
      console.log('in header component',data);
      if(data){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false
      }
    });
  }


  logout(){
    this.firebaseService.logout();
  }
  showBooks(){
    this._router.navigate(['/books']);
  }
  showLibrary(){
    this._router.navigate(['/library']);
  }
  shopBooks(){
    this._router.navigate(['/shopbooks']);
  }
  showCart(){
    this._router.navigate(['/cart']);
  }
  
}
