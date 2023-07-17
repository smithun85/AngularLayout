import { Router, RouterModule, Routes } from "@angular/router";
import { MatricesMultiplicationComponent } from "./matrices-multiplication/matrices-multiplication.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'matrix',
        component:MatricesMultiplicationComponent
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class MatrixRoutingModule{}