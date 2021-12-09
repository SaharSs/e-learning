
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdCourseComponent } from './ad-course/ad-course.component';
import { AdCoursesComponent } from './ad-courses/ad-courses.component';
import { AdUserComponent } from './ad-user/ad-user.component';
import { AdVideoComponent } from './ad-video/ad-video.component';
import { CourseVComponent } from './course-v/course-v.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { CoursesComponent } from './courses/courses.component';
import { CreateCComponent } from './create-c/create-c.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginadComponent } from './loginad/loginad.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { ShoppingComponent } from './shopping/shopping.component';
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
  {path:'profil',component:ProfileComponent},
  {path:'create-c',component:CreateCComponent},
  {path:'courses',component:CoursesComponent},
  {path:'course-v',component:CourseVComponent},
  {path:'ad-video',component:AdVideoComponent},
  {path:'ad-course',component:AdCourseComponent},
  {path:'home/:key',component:CoursedetailsComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'shopping/:key',component:MycoursesComponent},
  {path:'feedback',component:FeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
