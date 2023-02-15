import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AComponent} from "./components/a/a.component";
import {BComponent} from "./components/b/b.component";

const routes: Routes = [
  {
    path: "",
    pathMatch:"full",
    redirectTo:"/a"
  },
  {
    path: "a",
    component: AComponent
  },
  {
    path:"b",
    component: BComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
