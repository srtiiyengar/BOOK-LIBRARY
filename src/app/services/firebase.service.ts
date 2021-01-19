import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  userId: String;
  constructor(public fba: AngularFireAuth,
    public db: AngularFireDatabase,
    public afs: AngularFirestore,
    private _router: Router) { }
  async signIn(email: string, password: string) {
    await this.fba.signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data);
        if (data) this.userId = data.user.uid;
        console.log(this.userId);
        this.isLoggedIn.next(true);
        this._router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      });
  }
  async signUp(username: string, email: string, password: string, mobile: number) {
    await this.fba.createUserWithEmailAndPassword(email, password)
      .then(data => {
        console.log('You have successfully created new user');
        this.fba.authState.subscribe(user => {
          console.log(user);
          console.log(user.email);
          if (user) this.userId = user.uid;
          console.log(this.userId);
          this.db.database.ref()
          .child("user")
          .child(`${this.userId}`)
          .child("uid")
          .push(this.userId);
         
          // .push(this.userId);
        })
      }).catch(error => {
            console.log(error);
      })
  }

  logout() {
    this.isLoggedIn.next(false);
  }

}
