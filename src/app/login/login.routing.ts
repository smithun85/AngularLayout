import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";


const routes:Routes = [
    {
        path:'',
        component:LoginComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

<<<<<<< HEAD
export class LoginRoutingModule{}
=======
export class LoginRoutingComponent{}
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
