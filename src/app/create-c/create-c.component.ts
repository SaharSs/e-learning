import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LmService } from '../services/lm.service';

@Component({
  selector: 'app-create-c',
  templateUrl: './create-c.component.html',
  styleUrls: ['./create-c.component.css']
})
export class CreateCComponent implements OnInit {
  ll:any
  successUpdate:any
dataProfile={
firstName:"",

image:"",
bio:"",
uid:""
};
task:AngularFireUploadTask | undefined
ref:AngularFireStorageReference | undefined
persentages:any
@ViewChild('image', { static: false })
image: ElementRef | undefined
  constructor(private lm:LmService,private route:Router) { }

  ngOnInit(): void {
  }
  
addNewcourse(f:any) {
  let course = (f.value).course,
  description = (f.value).description,
  duration=(f.value).duration,
  author=(f.value).author,
 original=(f.value).original,
  image = this.image?.nativeElement?.files[0],
  selling=(f.value).selling
 
this.lm.addNewcourse(course, description , image ,duration ,author,original,selling); 
   }


}
