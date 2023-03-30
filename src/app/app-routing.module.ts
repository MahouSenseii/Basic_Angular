import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './Home/home.component'

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'}, 
  {path: 'about', component:AboutComponent},
  {path: 'home', component: HomeComponent}
]


@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
   ],
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]

})
export class AppRoutingModule { }
