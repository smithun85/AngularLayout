import {  RouterModule, Routes } from "@angular/router";
import { DynamicFormComponent } from "./dynamic-form.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'',
        component:DynamicFormComponent
    },
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class DynamicFormRouting {}