import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upu',
  templateUrl: './upu.component.html',
  styleUrls: ['./upu.component.css']
})
export class UpuComponent implements OnInit {
  keyParams:any
  datauser={
    firstName:'',
    email:'',
    password:'',
    bio:"",
    role:'',
    lastName:'',
    pays:'',
    uid:''
    
  }
  successUpdate:string=""
  
  
  constructor(private fs:AngularFirestore,private parms:ActivatedRoute,private route:Router) { 
    this.parms.params.subscribe(query=>{
      return this.keyParams=query['key']
    })
  }

  ngOnInit(): void {
    this.fs.collection('users').ref.doc(this.keyParams).get().then(data=>{
      console.log(data.data())

      this.datauser.firstName=data.get('firstName')
      this.datauser.lastName=data.get('lastName')
      this.datauser.email=data.get('email')
      this.datauser.password=data.get('password')
      this.datauser.bio=data.get('bio')
      this.datauser.role=data.get('role')
      this.datauser.pays=data.get('pays')
      
      this.datauser.uid=data.get('uid')
    })
   
  }
  update(f:any){
    this.fs.collection("users").doc(this.keyParams).update({
      firstName:this.datauser.firstName,
      lastName:this.datauser.lastName,
      email:this.datauser.email,
      password:this.datauser.password,
      bio:this.datauser.bio,
      role:(f.value).role,
      pays:this.datauser.pays,
      uid:this.datauser.uid 
    }).then(()=>{
      this.successUpdate="updated!"
     this.route.navigate(["ad-user"])
   
    })
   
    
  }
 
}
