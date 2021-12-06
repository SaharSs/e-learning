import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginad',
  templateUrl: './loginad.component.html',
  styleUrls: ['./loginad.component.css']
})
export class LoginadComponent implements OnInit {

  constructor(private as:AuthService,private fst:AngularFireAuth,private fs:AngularFirestore,private route:Router) { }
mes:string=''
nl:any
datap={
  firstName:" ",
  
  
  role:" " ,
  pays:" "
}
  ngOnInit(): void {
  }

  login(f:any){
    let data=f.value
    this.as.signin(data.email,data.password).then((dat)=>{
      this.nl=dat.user?.uid
      localStorage.setItem("sl",this.nl);
    
   this.fs.collection('users').ref.doc(this.nl).get().then(data=>{
        console.log(data.data());
        
      this.datap.firstName=data.get('firstName')
      
      this.datap.role=data.get("role");
      this.datap.pays=data.get("pays");
      localStorage.setItem( "ls",this.datap.firstName);
      localStorage.setItem( "gt",this.datap.pays);
      localStorage.setItem( "vs",this.datap.role);
          localStorage.setItem( "ls",this.datap.firstName);
          localStorage.setItem( "gt",this.datap.pays);
          localStorage.setItem( "vs",this.datap.role);
          if( data.get("role")==="student" || data.get("role")==="teacher" ){
            this.fst.signOut().then(()=>{
              localStorage.removeItem('sl');
              localStorage.removeItem('user');
              localStorage.removeItem('ls');
              localStorage.removeItem('gt');
              localStorage.removeItem('vs');
              this.route.navigate(['/loginad']);
              window.location.reload();
  
              
             
            
            });
            
          }else{
            
            this.route.navigateByUrl("/")
            
           
          
          }
           })
    
    }).catch(()=>{
    this.mes="incorrect email and password "
    })
      }
}
