import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatricesMultiplicationComponent } from './matrices-multiplication/matrices-multiplication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrixRoutingModule } from './matrix-routing';



@NgModule({
  declarations: [
    MatricesMultiplicationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatrixRoutingModule

  ]
})
export class MatrixModule { }
