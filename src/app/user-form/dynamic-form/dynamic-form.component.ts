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

  public FormModel:any ={
    firstname: {
      type: "text",
      value: "Mr.",
      label: "FirstName",
    },
    lastname: {
      type: "text",
      value: "",
      label: "LastName",
    },
    address: {
      type: "textArea",
      value: "",
      label: "Address",
    },
    age: {
      type: "number",
      value: "",
      label: "age",
    },
    birthDay: {
      type: "date",
      value: "",
      label: "Birthday",
    },
  
    typeBussiness: {
      label: "Bussiness Type",
      value: "premium",
      type: "radio",
      options: [
        {
          label: "Enterprise",
          value: "1500",
        },
        {
          label: "Home",
          value: "6",
        },
        {
          label: "Personal",
          value: "1",
        },
      ],
    },
    newsletterIn: {
      label: "Suscribe to newsletter",
      value: "email",
      type: "checkbox"
    },
    suscriptionType: {
      label: "Suscription Type=",
      value: "premium",
      type: "select",
      options: [
        {
          label: "Pick one",
          value: "",
        },
        {
          label: "Premium",
          value: "premium",
        },
        {
          label: "Basic",
          value: "basic",
        },
      ],
    },
  
    City: {
      label: " City=",
      value: "premium",
      type: "select",
      options: [
        {
          label: "Select",
          value: "",
        },
        {
          label: "City-1",
          value: "city-1",
        },
        {
          label: "city-2",
          value: "city-2",
        },
      ],
    },
  };
  
constructor(private model:UsersService){ }

public selectedUserData:any
ngOnInit() {
 
  
  this.buildForm();
}
//Create form using user_Data
getFormControlsFields() {
  const formGroupFields:any = {};

  // console.log("Object Key:",Object.keys(this.model.getModels()));  //Object Key= ['name', 'lastName',...]
  //we can not directly iterate of Object so 1st we convert in array then apply iteration
  for(const field of Object.keys(this.model.getModels())){   
    // console.log("field:",field);                // field:name, field:lastName,.....
    formGroupFields[field] = new FormControl(''); //Dynamically create object with key-value pair=>key is field name and value os formControl
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
// ===============================================================================================



}
