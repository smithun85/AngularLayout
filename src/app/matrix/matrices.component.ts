import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-matrices',
  templateUrl: './matrices.component.html',
  styleUrls: ['./matrices.component.scss']
})
export class MatricesComponent implements OnInit{

  matrixForm:FormGroup | any

  constructor(private fb:FormBuilder){
    this.matrixForm = this.fb.group({
      matrix_1_rows:['', [Validators.required, Validators.min(1)]],
      matrix_1_columns:['', [Validators.required, Validators.min(1)]],
      matrix_2_rows:['', [Validators.required, Validators.min(1)]],
      matrix_2_columns:['', [Validators.required, Validators.min(1)]],
      matrix_1:this.fb.array([
        this.initRow()
      ]),
      matrix_2:this.fb.array([
        this.fb.group({
          cells: this.fb.array([])
        })
      ]),
    })
  };

  ngOnInit(){};

  get matrix_1(){
    return this.matrixForm.get('matrix_1') as FormArray;
  };

  get matrix_2(){
    return this.matrixForm.get('matrix_2') as FormArray;
  };

  initRow() {
    return this.fb.group({
      cells: this.fb.array(['rrr'])
    });
  };


  


  createMatrices(){
    const matrix_1_rows = this.matrixForm.get('matrix_1_rows')?.value;
    const matrix_1_columns = this.matrixForm.get('matrix_1_columns')?.value
    const matrix_2_rows = this.matrixForm.get('matrix_2_rows')?.value
    const matrix_2_columns = this.matrixForm.get('matrix_2_columns')?.value
    // console.log(this.matrixForm.value)

    
    //Matrix-1
for(let i=0; i<matrix_1_rows;i++){     
  const firstRow = this.matrix_1.controls[i] as FormGroup;
  console.log(firstRow)
  const cellsArray = firstRow.get('cells') as FormArray;
  console.log(cellsArray)
  for(let j=0; j < matrix_1_columns; j++){
    cellsArray.push(this.fb.control('')); 
  }
  // this.matrix_1.push(cellsArray)
  console.log(cellsArray.value)
}

    //Matrix-2
    for(let i=0; i<matrix_2_rows; i++){
      for(let j=0; j<matrix_2_columns; j++){
        this.matrix_2.push(this.fb.control(''))
      }
    }
  }

  onSubmit(){
console.log(this.matrixForm.value)
    const matrixValues_1 = this.matrixForm.get('matrix_1')?.value;
    const matrixValues_2 = this.matrixForm.get('matrix_2')?.value;
  }

}
// git fetch origin
// 