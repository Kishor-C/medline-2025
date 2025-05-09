import { Routes } from "@angular/router"
import { LoginComponent } from "./login/login.component"
import { RegisterComponent } from "./register/register.component"
import { SuccessComponent } from "./success/success.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

/*
    we must configure this routes in the app.config.ts
*/
export const routes : Routes = [
    
    {path : 'login', component : LoginComponent},
    {path : 'register', component : RegisterComponent},
    {path : 'success', component : SuccessComponent},
    {path : '', redirectTo : 'login', pathMatch : 'full'},
    {path : '**', component : PageNotFoundComponent}
]
// localhost:4200/ >> empty path
/*
 Routers will resolve the path in the order you mention, hence
 invalid path give at the end i.e., ** if you give in the beginning
*/

