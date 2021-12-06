import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LmService } from '../services/lm.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isuser:any;
  isAdmin:any;
  userData:any
  us:any
  constructor(private fs:AngularFireAuth,private route:Router,
    public as:AuthService,private lm:LmService) { 
    this.as.user.subscribe((data) => {
      if (data) {
        
        this.isuser = true;
        this.as.use = data.uid;
      localStorage.setItem('user', this.as.use);
      this.lm.getUserData().subscribe(dat=>{
        this.us=dat
       if (this.us['role']=='admin')
        {
          console.log(this.us['role'])
         this.isAdmin = true;
       }
       else{
         this.isAdmin = false;
       }
      })  
      } else {
        this.isuser = false;
        this.as.use= '';
      
      }
    })

  }

  ngOnInit(): void {
  }
  logout(){
  
  
    this.fs.signOut().then(()=>{
      
      localStorage.removeItem('user');
      
      localStorage.removeItem('sl')
      localStorage.removeItem('vs');
      localStorage.removeItem('gt');
      localStorage.removeItem('ls');
      this.route.navigate(['/login']);
     
    
    });
    
  }

}
