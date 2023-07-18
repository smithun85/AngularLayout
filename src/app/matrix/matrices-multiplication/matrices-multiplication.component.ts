import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matrices-multiplication',
  templateUrl: './matrices-multiplication.component.html',
  styleUrls: ['./matrices-multiplication.component.scss']
})
export class MatricesMultiplicationComponent implements OnInit{

  matrixForm: FormGroup | any;
  matrix_1: any[][] =[];
  matrix1_rows:any;
  matrix1_columns :any
  matrix_2: any[][] = [] ;
  matrix2_rows: any;
  matrix2_columns :any
  matrix_1_values: any[][] =[];
  matrix_2_values: any[][] = [] ;
  resultMatrix: any[][] | any;
  isDisable_Result_btn:boolean = false

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.matrixForm = this.fb.group({
      matrix1_rows: ['', [Validators.required, Validators.min(1)]],
      matrix1_columns: ['', [Validators.required, Validators.min(1)]],
      matrix2_rows: ['', [Validators.required, Validators.min(1)]],
      matrix2_columns: ['', [Validators.required, Validators.min(1)]],
      // matrix:this.fb.array([
      //   this.fb.array([])
      // ])
    });
  }

// Generate matrix: 
  generateMatrices(){
  
    this.matrix1_rows=null;
    this.matrix1_columns =null
   
    this.matrix2_rows=null;
    this.matrix2_columns =null
    this.matrix1_rows = this.matrixForm.get('matrix1_rows').value;
    this.matrix1_columns = this.matrixForm.get('matrix1_columns').value;
    this.matrix2_rows = this.matrixForm.get('matrix2_rows').value;
    this.matrix2_columns = this.matrixForm.get('matrix2_columns').value;

    this.matrix_1 = this.initializeMatrix(this.matrix1_rows, this.matrix1_columns );
    this.matrix_2 = this.initializeMatrix(this.matrix2_rows, this.matrix2_columns);
    this.resultMatrix = null; // Reset the result matrix
    this.matrix_1_values = [] // Reset the  matrix1_Value
    this.matrix_2_values = [] // Reset the result matrix2_value

    this.isDisable_Result_btn = true

    console.log(this.matrix_1);
    console.log(this.matrix_2);
  };

  private initializeMatrix(rows: any, columns: any): any[][] {
    const matrix: any[][] = [];

    for (let i = 0; i < rows; i++) {
      const row: any[] = [];

      for (let j = 0; j < columns; j++) {
        row.push(new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]));
      }
      matrix.push(row);
    }
    return matrix;
  }
// ====================end: generate matrix===================

  
// Multiplication Matrix
  multiplyMatrices() {
       // Find matrix-1 value from form Controls:
       for (let i = 0; i < this.matrix1_rows; i++) {
        const row = [];
      for (let j = 0; j < this.matrix1_columns; j++) {
        row.push(this.matrix_1[i][j].value)
      }
      this.matrix_1_values.push(row)
      console.log(this.matrix_1_values);
    }
// Find matrix-2 value from form Controls:
    for (let i = 0; i < this.matrix2_rows; i++) {
      const row = [];
    for (let j = 0; j < this.matrix2_columns; j++) {
      row.push(this.matrix_2[i][j].value)
    }
    this.matrix_2_values.push(row)
    console.log(this.matrix_2_values);
  }
    this.resultMatrix = this.calculateMatrixMultiplication(this.matrix_1_values, this.matrix_2_values);
    console.log(this.resultMatrix);
  }

  private calculateMatrixMultiplication(matrix1: any[][], matrix2: any[][]): any[][] {
    const rows1 = matrix1.length;
    const columns1 = matrix1[0].length;
    console.log(matrix1[0]);
    const rows2 = matrix2.length;
    const columns2 = matrix2[0].length;
   


    if (columns1 !== rows2) {
      throw new Error('Invalid matrix dimensions');
    }

    const result: any[][] = [];
    // console.log(result);

   
    for (let i = 0; i < rows1; i++) {
      const row: any[] = [];
      for (let j = 0; j < columns2; j++) {
        let sum = 0;
        for (let k = 0; k < rows2; k++) {
          sum+= matrix1[i][k] * matrix2[k][j];

        
        }
        row.push(sum);
      }
      result.push(row);
    }
    console.log(result);
    return result;
  }
}
