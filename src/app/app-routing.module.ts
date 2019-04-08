import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {DirectionsComponent} from './directions/directions.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'directions', component: DirectionsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
