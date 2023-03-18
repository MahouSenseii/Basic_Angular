import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: "full"},
  {path: 'about', component:AboutComponent},
  {path: 'main', component:MainComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
