import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import{FormGroup,FormControl} from '@angular/forms';
import { AngularFireDatabase} from '@angular/fire/database'; 
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  existingMem: FormGroup;
  constructor(private _router:Router,
    public db:AngularFireDatabase,
    public afa: AngularFireAuth,
    public fs:FirebaseService) { }

  ngOnInit(): void {
    this.existingMem = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  onSubmit(){
    const member = {
      email: this.existingMem.get('email').value,
      password: this.existingMem.get('password').value
    }
    this.fs.signIn(member.email,member.password);
    localStorage.setItem('userEmail',JSON.stringify(member.email));
    localStorage.setItem('userPassword',JSON.stringify(member.password));
    localStorage.setItem('loggedIn','true');
    
    }
}
