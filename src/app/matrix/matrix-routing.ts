import { RouterModule, Routes } from "@angular/router";
import { MatricesComponent } from "./matrices.component";
import { NgModule } from "@angular/core";


const routes:Routes = [
    {
        path:'',
        component:MatricesComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MatrixRoutingModule {}