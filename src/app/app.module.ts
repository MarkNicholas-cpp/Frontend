import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { WhatwedoComponent } from './whatwedo/whatwedo.component';
import { UserformComponent } from './userform/userform.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatmoduleModule } from './matmodule/matmodule.module';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutusComponent,
    LoginComponent,
    SignupComponent,
    UserpageComponent,
    WhatwedoComponent,
    UserformComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatmoduleModule
  ],
  providers: [NavBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
