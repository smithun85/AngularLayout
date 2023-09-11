import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestComponent } from "./observable/test.component";
import { CustomPipeComponent } from "./custom-pipe/custom-pipe.component";
import { FormTestComponent } from "./dynamic-form-parent/form-test.component";
import { PaginationExampleComponent } from "./pagination-example/pagination-example.component";
import { LogicsComponent } from "./logics/logics.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { SearchTextComponent } from "./form-test/search-text.component";
import { DateLogicsComponent } from "./date-logics/date-logics.component";
import { LogicsArrayObjectComponent } from "./logics-array-object/logics-array-object.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { AsyncPipeComponent } from "./async-pipe/async-pipe.component";


const routes:Routes = [
  {
    path:'async-pipe',
    component:AsyncPipeComponent
  },
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
    path:'logics-arr-obj',
    component:LogicsArrayObjectComponent
   },

   {
    path:'checkbox',
    component:CheckboxComponent
   },
   {
    path:'search-text',
    component:SearchTextComponent
   },
   {
    path:'date-logics',
    component:DateLogicsComponent
   },
   {
    path:'accordion',
    component:AccordionComponent
   },
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ATestRoutingComponent{}
// export const testComponentArray = [CustomPipeComponent, FormTestComponent, PaginationExampleComponent, TestComponent]