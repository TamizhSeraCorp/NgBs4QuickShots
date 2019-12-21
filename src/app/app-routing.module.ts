import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InviterComponent } from "./inviter/inviter.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CredsComponent } from "./creds/creds.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "inviter", component: InviterComponent },
  { path: "creds", component: CredsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
