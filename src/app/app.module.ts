import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginButtonComponent } from './login-button/login-button.component';
import { SignupButtonComponent } from './signup-button/signup-button.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './authentication-button/authentication-button.component';
import { AuthNavComponent } from './auth-nav/auth-nav.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LoginButtonComponent,
    SignupButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
