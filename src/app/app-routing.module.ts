import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { SignupComponent } from './signup/signup.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { UserformComponent} from './userform/userform.component';
const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path:"Home",component:HomeComponent},
  {path:"Aboutus",component:AboutusComponent},
  {path:"Whatwedo",component:WhatwedoComponent},
  {path:"Userform",component:UserformComponent},
  {path:"Login",component:LoginComponent},
  {path:"Signup",component:SignupComponent},
  {path:"userpage",component:UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
