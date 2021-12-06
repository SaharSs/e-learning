import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ll:any
  successUpdate:any
dataProfile={
firstName:"",

Image:"",
bio:"",
uid:""
};
task:AngularFireUploadTask | undefined
ref:AngularFireStorageReference | undefined
persentages:any
@ViewChild('image', { static: false })
image: ElementRef | undefined
  constructor(private fs:AngularFirestore,private fst:AngularFireStorage ) { }

  ngOnInit(): void {
    this.ll=localStorage.getItem("sl")
    this.fs.collection("users").ref.doc(this.ll).get().then((data)=>{
      console.log(data.data())
      this.dataProfile.firstName=data.get('firstName')
     
      this.dataProfile.Image=data.get('image')
      this.dataProfile.bio=data.get('bio')
      this.dataProfile.uid=this.ll
    })
  }
  update(){
    this.fs.collection("users").doc(this.dataProfile.uid).update({
      firstName:this.dataProfile.firstName,
      bio:this.dataProfile.bio
    }).then(()=>{
      this.successUpdate="updated!"
      window.location.reload()
   
    })
  }
  uploadImage(event:any){
      const id=Math.random().toString(36).substring(2)
      this.ref=this.fst.ref(id)
      this.task=this.ref.put(event.target.files[0])
      this.persentages=this.task.percentageChanges()
      this.task.then((data)=>{
        data.ref.getDownloadURL().then(url=>{
          this.fs.collection("users").doc(this.dataProfile.uid).update({
            image:url
          })
        })
      })
  }

}

