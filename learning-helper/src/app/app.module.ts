import { LearningGuardService } from './services/learning-guard.service';
import { DataGeneratorService } from './services/data-generator.service';
import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatStepperModule} from '@angular/material/stepper'; 
import {MatSelectModule} from '@angular/material/select'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './header/login/login.component';
import { UserComponent } from './header/user/user.component';
import { LearningComponent } from './learning/learning.component';
import { SamePasswordsDirective } from './directives/same-passwords.directive';
import { UniqueUsernameDirective } from './directives/unique-username.directive';
import { NewSubjectComponent } from './learning/new-subject/new-subject.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    LearningComponent,
    SamePasswordsDirective,
    UniqueUsernameDirective,
    NewSubjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatSidenavModule,
    MatDividerModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule, 
    MatStepperModule, 
    MatSelectModule, 
    ReactiveFormsModule,
    MatDatepickerModule,
    MatRadioModule
  ],
  providers: [
    AuthenticationService,
    DataGeneratorService,
    LearningGuardService,
    UniqueUsernameDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
