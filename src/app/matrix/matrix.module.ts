import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatricesComponent } from './matrices.component';
import { MatrixRoutingModule } from './matrix-routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MatricesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatrixRoutingModule,
  ]
})
export class MatrixModule { }
