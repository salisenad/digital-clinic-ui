import { PatientComponent } from './patient/patient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "patient", component: PatientComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
