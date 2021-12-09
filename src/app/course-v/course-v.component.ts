import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { LmService } from '../services/lm.service';

@Component({
  selector: 'app-course-v',
  templateUrl: './course-v.component.html',
  styleUrls: ['./course-v.component.css']
})
export class CourseVComponent implements OnInit {
keyParams:any
task:AngularFireUploadTask | undefined
ref:AngularFireStorageReference | undefined
persentages:any
@ViewChild('video', { static: false })
video: ElementRef | undefined
  constructor(private fs:AngularFirestore,private lm:LmService,private parms:ActivatedRoute,private route:Router) { 
    
  }
dataArray:any
  ngOnInit(): void {
    this.fs.collection("courses").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
        course:element.payload.doc.get('course')
      
       }

  

})})}
add(f:any) {
  let courseid = (f.value).iid,
  courseN=(f.value).courseN,
  lesson = (f.value).lesson,

  description=(f.value).description,
 
  video = this.video?.nativeElement?.files[0]
  console.log(video)
 
this.lm.add(courseid, lesson, video,description,courseN );
this.route.navigateByUrl('ad-video') 
   }
    }
