import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./observable/test.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { FormTestComponent } from "./form-test/form-test.component";
import { PaginationExampleComponent } from "./pagination-example/pagination-example.component";
import { LogicsComponent } from "./logics/logics.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";


const routes:Routes = [
    {
        path:'pipe',
        component:CustomPipeComponent
      },
      {
        path:'form',
        component:FormTestComponent
      },

    {
        path:'paginationPath',
        component:PaginationExampleComponent
    
    },
    {
        path:'test',
        component:TestComponent
    },
   {
    path:'logics',
    component:LogicsComponent
   },

   {
    path:'checkbox',
    component:CheckboxComponent
   },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ATestRoutingComponent{}
// export const testComponentArray = [CustomPipeComponent, FormTestComponent, PaginationExampleComponent, TestComponent]