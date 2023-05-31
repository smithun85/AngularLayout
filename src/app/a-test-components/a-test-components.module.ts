import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { tempConverterPipe } from './custom-pipe/temp-converter.pipe';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomPipeComponent,
    tempConverterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ATestComponentsModule { }
