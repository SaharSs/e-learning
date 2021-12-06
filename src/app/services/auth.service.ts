import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import firebase from "firebase/compat/app"
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 user:Observable<firebase.User|null>
 use:string=""
  constructor(private fs:AngularFireAuth,private fst:AngularFirestore) {
    this.user=this.fs.user
   }
  signup(email:any,password:any){
    return this.fs.createUserWithEmailAndPassword(email,password)
  }
  signin(email:any,password:any){
    return this.fs.signInWithEmailAndPassword(email,password)
  }
 
}
