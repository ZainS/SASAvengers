import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AvengersListComponent } from './avengers-list/avengers-list.component';
import { NewAvengerComponent } from './new-avenger/new-avenger.component';
import { AvengereditComponent } from './avengeredit/avengeredit.component';

const routes: Routes = [
  {path: "home", component: AvengersListComponent},
  {path: "edit/:id", component: AvengereditComponent},
  {path: "newAvenger", component: NewAvengerComponent},
  {path: "", redirectTo: "home", pathMatch: "full"}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
