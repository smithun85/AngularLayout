import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicCheckboxComponent } from './dynamic-checkbox/dynamic-checkbox.component';
import { DynamicInputComponent } from './dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-select/dynamic-select.component';
import { DynamicFormRouting } from './dynamic-form.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicCheckboxComponent,
    DynamicInputComponent,
    DynamicRadioComponent,
    DynamicSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormRouting,
  ],
  exports:[]
})
export class DynamicFormModule { }
