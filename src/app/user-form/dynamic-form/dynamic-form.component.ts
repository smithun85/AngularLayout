import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/users/users.service'; //Form field model exists in Userservice 
import { UsersComponent } from 'src/app/users/users/users.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent implements OnInit{
@ViewChild(UsersComponent) userList:any ;

  sessionId: any;
  registerForm: FormGroup | any;
  fields:any = [];
  // model = {                 //this model is coming from UserService 
  //         name: '',
  //         lastName: '',
  //         address: '',
  //         age: '',
  //  };
  
constructor(private model:UsersService){ }

public selectedUserData:any
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
  this.selectedUserData = this.registerForm.value;
  this.model.selectedUserData$.subscribe( (data)=>{
    this.selectedUserData = data
    });
    this.model.setUserList(this.selectedUserData)
    console.log("Data",this.selectedUserData);
  console.log("registerForm:",this.registerForm.value);
  
};

// ngAfterViewInit():void{
//   this.sessionId = this.userList.sessionId
// }


}
