import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InviterComponent } from "./inviter/inviter.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CredsComponent } from "./creds/creds.component";
import { StealthboxComponent } from './comps/stealthbox/stealthbox.component';

@NgModule({
  declarations: [
    AppComponent,
    InviterComponent,
    DashboardComponent,
    CredsComponent,
    StealthboxComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
