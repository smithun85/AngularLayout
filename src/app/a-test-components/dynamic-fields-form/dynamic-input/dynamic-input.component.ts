import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.scss']
})
export class DynamicInputComponent {

@Input() field:any
@Input() formName:FormGroup | any

constructor(){
  console.log("InputFieldsData from dynamic",this.field);
  console.log("FormGroup",this.formName);
}

}
