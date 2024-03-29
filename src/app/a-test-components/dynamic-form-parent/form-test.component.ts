import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-test',
  templateUrl: './form-test.component.html',
  styleUrls: ['./form-test.component.scss']
})
export class FormTestComponent implements OnInit{

  firstName:any

modelChanged(event:any){
console.log("modelChanged:",event);
};
firstNameChanged(arg:any) {
  console.log(
      "firstNameChanged  argument:" + arg + "  component: " + this.firstName
  );
}

// ==================Dynamic Form Test=================================
public model:any ={

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
    type: "text",
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
  birthDay1: {
    type: "date",
    value: "",
    label: "Birthday-1",
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
  typeBussiness_1: {
    label: "Bussiness Type-1",
    value: "premium",
    type: "radio",
    options: [
      {
        label: "Enterprise-1",
        value: "1500",
      },
      {
        label: "Home-1",
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


public dynamicFields:any = []

registerForm:FormGroup | any

ngOnInit(): void {
  this.createForm()
}

// getFormControlsFields(){
//   let formGroupFields:any = {}
//   let fields = Object.keys(this.model)
//   for(const field of fields){
//     formGroupFields[field] = new FormControl('')  
//     this.dynamicFields.push(field)
//   }
//   return formGroupFields;
// }

getFormControlsFields(){
  const formGroupFields:any = {};
  const modelArray = Object.keys(this.model); //modelArray stores keys of object in array; ['firstname', 'lastname', 'address', 'age', 'birthDay']
  // console.log("Object.key:",modelArray);
  for( const field of modelArray){
const fieldProps = this.model[field] //fieldProps stores object value which is also a object; { type:"text"  value:"", label:"FirstName"},{type:"text"  value:"", label:"lastName" }...so on
//  console.log("fieldProps",fieldProps);
//Create the dynamic form:
 formGroupFields[field] = new FormControl(fieldProps.value) //create the formControl field with keys and store in formGroupFields object
 this.dynamicFields.push({...fieldProps,fieldName:field})

}
console.log("FormGroupFields:",formGroupFields);
console.log("fields:",this.dynamicFields); //[{type: 'text', value: 'Mr.', label:"firstname", fieldName:"firstname"},...]

return formGroupFields
}

createForm(){
  this.registerForm = new FormGroup(this.getFormControlsFields())
}

onsubmit(){
console.log("Result", this.registerForm.value);
}

// ========================================================================================




}
