import { Component, OnInit } from '@angular/core';
import { QuestionBase } from './question-base';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/users/users.service'; //Form field model exists in Userservice 

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit{

  registerForm: FormGroup | any;
  fields:any = [];
  // model = {                 //this model is coming from UserService 
  //         name: '',
  //         lastName: '',
  //         address: '',
  //         age: '',
  //  };
  
constructor(private model:UsersService){ }

ngOnInit() {
  this.buildForm();
}

getFormControlsFields() {
  const formGroupFields:any = {};

  // console.log("Object Key:",Object.keys(this.model.getModels()));  //Object Key= [name='',lastName='',...]
  //we can not directly iterate of Object so !st we convert in array then apply iteration
  for(const field of Object.keys(this.model.getModels())){   
    // console.log("field:",field);                // field:name, field:lastName,.....
    formGroupFields[field] = new FormControl(''); 
    this.fields.push(field);                  
  }
  // console.log("formGroupFields",formGroupFields); //{name: FormControl, lastName: FormControl, address: FormControl, age: FormControl}
  // console.log("Fields:",this.fields);            //fields= [name='',lastName='',...]
  return formGroupFields;  //it returns {name: FormControl, lastName: FormControl, address: FormControl, age: FormControl}
}

buildForm() {
  this.registerForm = new FormGroup(this.getFormControlsFields());
}

onSubmit(){
  console.log("registerForm:",this.registerForm.value);
}


}
