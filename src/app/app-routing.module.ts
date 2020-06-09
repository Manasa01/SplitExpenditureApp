import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
//import { ClientsComponent } from "./components/clients/clients.component";
import { AuthGaurd } from "./gaurds/auth.gaurd";
const routes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [AuthGaurd] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "client/add",
    component: AddClientComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: "client/edit/:id",
    component: EditClientComponent,
    canActivate: [AuthGaurd]
  },
  //{ path: "clients", component: ClientsComponent },
  {
    path: "client/:id",
    component: ClientDetailsComponent,
    canActivate: [AuthGaurd]
  },
  { path: "settings", component: SettingsComponent, canActivate: [AuthGaurd] },
  { path: "**", component: NotFoundComponent, canActivate: [AuthGaurd] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGaurd]
})
export class AppRoutingModule {}
