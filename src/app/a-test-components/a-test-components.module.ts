import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { tempConverterPipe } from './custom-pipe/temp-converter.pipe';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { FormTestComponent } from './form-test/form-test.component';
import { DynamicInputComponent } from './dynamic-fields-form/dynamic-input/dynamic-input.component';
import { DynamicCheckboxComponent } from './dynamic-fields-form/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicRadioComponent } from './dynamic-fields-form/dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-fields-form/dynamic-select/dynamic-select.component';
import { ATestRoutingComponent } from './a-test.routing';
import { TestComponent } from './test/test.component';

import { PaginationModule } from 'ngx-bootstrap/pagination';


import { RouterModule } from '@angular/router';
import { PaginationExampleComponent } from './pagination-example/pagination-example.component';
import { SearchTextComponent } from './search-text/search-text.component';
import { LogicsComponent } from './logics/logics.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    CustomPipeComponent,
    tempConverterPipe,
    FormTestComponent,
    DynamicInputComponent,
    DynamicCheckboxComponent,
    DynamicRadioComponent,
    DynamicSelectComponent,
    TestComponent,
    PaginationExampleComponent,
    SearchTextComponent,
    LogicsComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    PaginationModule.forRoot(),
    ATestRoutingComponent,
  ],
  exports:[RouterModule]
})
export class ATestComponentsModule { }
