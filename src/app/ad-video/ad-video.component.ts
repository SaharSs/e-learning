import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ad-video',
  templateUrl: './ad-video.component.html',
  styleUrls: ['./ad-video.component.css']
})
export class AdVideoComponent implements OnInit {

  constructor(private fs:AngularFirestore,private as:AuthService) { }
dataArray:any
  ngOnInit(): void {
    this.fs.collection("lesson/"+this.as.use).snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         courseid:element.payload.doc.get('courseid'),
         courseN:element.payload.doc.get('courseN'),
         
          lessond:element.payload.doc.get('lessond'),
          lesson:element.payload.doc.get('lesson'),
      
          video:element.payload.doc.get('video')
       
       
       }
       })
      

     })
  }

}
/* <video  preload="auto" controls>
                    <source [src]="item.video" >
                </video>*/