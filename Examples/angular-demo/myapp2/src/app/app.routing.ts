import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { SuccessComponent } from "./success/success.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { DashboardComponent } from "./dashboard/dashboard.component"
import { HomeComponent } from "./home/home.component"
import { ProfileComponent } from "./profile/profile.component"
import { SettingsComponent } from "./settings/settings.component"
import { authGuard } from "./auth.guard"

/*
    we must configure this routes in the app.config.ts
*/
export const routes : Routes = [
    
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'success/:user', component : SuccessComponent, canActivate : [authGuard], children : [
        {path:'dashboard', component : DashboardComponent},
        {path:'home', component : HomeComponent},
        {path:'profile', component: ProfileComponent},
        {path:'settings', component: SettingsComponent},
        {path:'', redirectTo: 'dashboard', pathMatch: 'full'}
    ]},
    {path : '', redirectTo : 'login', pathMatch : 'full'},
    {path : '**', component : PageNotFoundComponent}
]
// localhost:4200/ >> empty path
/*
 Routers will resolve the path in the order you mention, hence
 invalid path give at the end i.e., ** if you give in the beginning
*/

