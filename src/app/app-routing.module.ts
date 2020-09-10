import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { AvengerDetailComponent } from './avenger-detail/avenger-detail.component';
import { NewAvengerComponent } from './new-avenger/new-avenger.component';

const routes: Routes = [
  {path: "home", component: AvengersListComponent},
  {path: "detail/:id", component: AvengerDetailComponent},
  {path: "newAvenger", component: NewAvengerComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
