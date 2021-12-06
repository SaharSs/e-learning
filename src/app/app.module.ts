import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { LoginadComponent } from './loginad/loginad.component';
import { RegisteradComponent } from './registerad/registerad.component';
import { AdUserComponent } from './ad-user/ad-user.component';
import { AboutComponent } from './about/about.component';
import { UpuComponent } from './upu/upu.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AdCoursesComponent } from './ad-courses/ad-courses.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    LoginadComponent,
    RegisteradComponent,
    AdUserComponent,
    AboutComponent,
    UpuComponent,
    TeacherComponent,
    AdCoursesComponent,
    ProfileComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
