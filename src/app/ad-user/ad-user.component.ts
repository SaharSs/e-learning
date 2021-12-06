import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LmService } from '../services/lm.service';

@Component({
  selector: 'app-ad-user',
  templateUrl: './ad-user.component.html',
  styleUrls: ['./ad-user.component.css']
})
export class AdUserComponent implements OnInit {
dataArray:any
  constructor(private fs:AngularFirestore,private as:AuthService,private lm:LmService,private route:Router) { }

  ngOnInit(): void {
    this.fs.collection("users").snapshotChanges().subscribe((data)=>{
      this.dataArray= data.map(element=>{
        return{ 
          id:element.payload.doc.id ,
         firstName:element.payload.doc.get('firstName'),
         lastName:element.payload.doc.get('lastName'),
          role:element.payload.doc.get('role'),
          email:element.payload.doc.get('email'),
          pays:element.payload.doc.get('pays'),
          password:element.payload.doc.get('password'),
          bio:element.payload.doc.get('bio'),
          level:element.payload.doc.get('level'),
          uid:element.payload.doc.get('uid')
       
       
       }
       })
      

     })
     
    }
    delete(id:any){
      if (confirm('Are you sure?')){
      this.fs.collection("users").doc(id).delete()
    }
  }
  updatec(id:any){
    this.route.navigate(['/ad-user/'+id])
   
  }
  ui:any
  addNewuser(f:NgForm) {
    let data=f.value;
    this.as.signup(data.email,data.password).then((dat)=>{
      this.fs.collection('users').doc(dat.user?.uid).set({ 
        firstName:data.firstName,
        email:data.email,
        password:data.password,
        role:data.role,
        pays:data.pays,
        level:data.level,
        Specialty:data.l

        
      }).then(()=>{
        this.ui=dat.user?.uid
        localStorage.setItem('sl',this.ui)
        localStorage.setItem('ls',data.flName)
        localStorage.setItem('gt',data.adress)
this.route.navigate(['/'])
      })
    })

   
  	}
}
