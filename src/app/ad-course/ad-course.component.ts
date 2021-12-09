import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ad-course',
  templateUrl: './ad-course.component.html',
  styleUrls: ['./ad-course.component.css']
})
export class AdCourseComponent implements OnInit {

  constructor(private fs:AngularFirestore,private as:AuthService) { }
dataArray:any
  ngOnInit(): void {
    this.fs.collection("courses/"+this.as.use).snapshotChanges().subscribe((data)=>{
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
  }


