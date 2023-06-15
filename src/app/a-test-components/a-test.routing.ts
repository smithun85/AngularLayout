import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./test/test.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { FormTestComponent } from "./form-test/form-test.component";
import { PaginationExampleComponent } from "./pagination-example/pagination-example.component";


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
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ATestRoutingComponent{}
// export const testComponentArray = [CustomPipeComponent, FormTestComponent, PaginationExampleComponent, TestComponent]