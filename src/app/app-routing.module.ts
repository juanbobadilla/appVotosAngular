import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './Components/about/about.component';
import { BodyComponentComponent } from './Components/body-component/body-component.component';

const routes: Routes = [
  {path:'', component:BodyComponentComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
