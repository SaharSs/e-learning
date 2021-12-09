import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fs:AngularFirestore,private route:Router) { }
dataArray:any
  ngOnInit(): void {
    this.fs.collection("courses").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         course:element.payload.doc.get('course'),
         author:element.payload.doc.get('author'),
         
          description:element.payload.doc.get('description'),
           duration:element.payload.doc.get('duration'),
           image:element.payload.doc.get('image'),
           original:element.payload.doc.get('original'),
           selling:element.payload.doc.get('selling'),
       
       
       }
       })
      

     })
  }
  enroll(id:any){
    this.route.navigateByUrl('/home/'+id)
  }
  }

