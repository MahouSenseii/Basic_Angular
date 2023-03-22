import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component'

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: "full"},
  {path: 'about', component:AboutComponent},
  {path: 'main', component:MainComponent},
]


@NgModule({
  declarations: [
    AboutComponent,
    MainComponent,
   ],
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]

})
export class AppRoutingModule { }
