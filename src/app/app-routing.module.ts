import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdCoursesComponent } from './ad-courses/ad-courses.component';
import { AdUserComponent } from './ad-user/ad-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginadComponent } from './loginad/loginad.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UpuComponent } from './upu/upu.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'loginad',component:LoginadComponent},
  {path:'registerad',component:RegisteradComponent},
  {path:'ad-user',component:AdUserComponent},
  {path:'about',component:AboutComponent},
  {path:'ad-user/:key',component:UpuComponent},
  {path:'teacher',component:TeacherComponent},
  {path:'ad-courses',component:AdCoursesComponent},
  {path:'profil',component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
