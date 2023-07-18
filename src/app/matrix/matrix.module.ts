import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
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
=======
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

>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d
  ]
})
export class MatrixModule { }
