import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LmService {
  task:AngularFireUploadTask | undefined
  ref:AngularFireStorageReference | undefined
  persentages :any 
  constructor(private fst:AngularFirestore,private as:AuthService, private storage: AngularFireStorage) { }
  getUserData() {
    return this.fst.doc('users/' + this.as.use).valueChanges();
  }
  addNewcourse(course: string, description:string, image:File,duration:string,author:string,original:number,selling:number) {
    const id=Math.random().toString(36).substring(2)
    this.ref=this.storage.ref(id)
    this.task=this.ref.put(image)
    this.persentages=this.task.percentageChanges()
    this.task.then((data)=>{
    data.ref.getDownloadURL().then((photoUrl) => {
    this.fst.collection('courses').doc().set({
                      course:course,
                      description:description,
                      duration:duration,
                      image:photoUrl,
                      author:author,
                      original:original,
                      selling:selling,
                      uid:localStorage.getItem('sl')
                    })});
                  })
          }
          add(courseid: string, lesson:string, video:File,description:string,courseN:string) {
            const id=Math.random().toString(36).substring(2)
            this.ref=this.storage.ref(id)
            this.task=this.ref.put(video)
            this.persentages=this.task.percentageChanges()
            this.task.then((data)=>{
            data.ref.getDownloadURL().then((photoUrl) => {
            this.fst.collection('lesson').doc().set({
                              courseid:courseid,
                              lesson:lesson,
                              lessond:description,
                              video:photoUrl,
                              courseN:courseN,
                              uid:localStorage.getItem('sl')
                            })});
                          })
                  }
                  addToCart(data:any) {
                    return this.fst.collection(`users/${this.as.use}/cart`).add(data);
                    }
                    getCart() {
                      return this.fst.collection(`users/${this.as.use}/cart`).snapshotChanges();
                      }
                      orders(data:any) {
                        return this.fst.collection("orders").add(data);
                        }
}
