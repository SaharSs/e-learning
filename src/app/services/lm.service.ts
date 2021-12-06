import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LmService {

  constructor(private fst:AngularFirestore,private as:AuthService) { }
  getUserData() {
    return this.fst.doc('users/' + this.as.use).valueChanges();
  }
}
