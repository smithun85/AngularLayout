<<<<<<< HEAD
import { RouterModule, Routes } from "@angular/router";
import { MatricesComponent } from "./matrices.component";
import { NgModule } from "@angular/core";


const routes:Routes = [
    {
        path:'',
        component:MatricesComponent
=======
import { Router, RouterModule, Routes } from "@angular/router";
import { MatricesMultiplicationComponent } from "./matrices-multiplication/matrices-multiplication.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'matrix',
        component:MatricesMultiplicationComponent
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

<<<<<<< HEAD
export class MatrixRoutingModule {}
=======
export class MatrixRoutingModule{}
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
