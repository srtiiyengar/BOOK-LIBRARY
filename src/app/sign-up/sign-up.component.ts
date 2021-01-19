import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{FormGroup,FormControl} from '@angular/forms';
import { AngularFireDatabase} from '@angular/fire/database'; 
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newMem: FormGroup;
  items : Observable<any[]>; 
  constructor(private _router:Router,
    public db:AngularFireDatabase,
    public fs:FirebaseService) { 
    // this.items=db.list('New Beginning').valueChanges();
    // console.log('items', this.items);
  }
  

  ngOnInit(): void {
    this.newMem = new FormGroup({
      userName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      mobile: new FormControl()
    })
  }

  onSubmit(){
    const member = {
      userName: this.newMem.get('userName').value,
      email: this.newMem.get('email').value,
      password: this.newMem.get('password').value,
      mobile:this.newMem.get('mobile').value

    }
    console.log(this.newMem.value);
    this.fs.signUp(member.userName, member.email, member.password,member.mobile);
    
    // this.db.list('/Members').push(member);  
    this._router.navigate(['/new-member']);    
    
  }
  

}
