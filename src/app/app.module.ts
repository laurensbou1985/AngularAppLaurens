import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';  
import { AppComponent }  from './app.component';
import { AppHome } from './home.component';  
import { AppIntroductie } from './Introductie.component';
import { AppCV } from './CV.component';
/*import { AppContactForm } from './contact-form.component';*/
import { PageNotFoundComponent } from './NotFound.component';
import { RouterModule, Routes } from '@angular/router'; 

/* Setting the Routing pages */ 
const appRoutes: Routes = [
  { path: 'Home', component: AppHome }, 
  { path: 'Introductie', component: AppIntroductie },
  { path: 'CV', component: AppCV },
  /*{ path: 'Contact', component: AppContactForm },*/
  { path: '**', component: PageNotFoundComponent }
];  

@NgModule({ 
   imports: [ BrowserModule, 
   RouterModule.forRoot(appRoutes)], 
   declarations: [ AppComponent, AppHome, AppIntroductie, AppCV, PageNotFoundComponent], 
   bootstrap: [ AppComponent ] 
}) 
export class AppModule { }
