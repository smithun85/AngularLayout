import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logics',
  templateUrl: './logics.component.html',
  styleUrls: ['./logics.component.scss']
})
export class LogicsComponent implements OnInit{

  moduleForm:FormGroup | any;
  formResult:Array<any> = []
  permision:FormControl|any

  modules:Array<any> = [
    {
      "label":"module-1",
      "value":"module-1"
    },
    {
      "label":"module-2",
      "value":"module-2"
    },
    {
      "label":"module-3",
      "value":"module-3"
    },
    {
      "label":"module-4",
      "value":"module-4"
    },
    {
      "label":"module-5",
      "value":"module-5"
    },

  ];

  permisions:Array<any> = [
    {
      "label":"permision-1",
      "value": "permision-1"
    },
    {
      "label":"permision-2",
      "value": "permision-2"
    },
    {
      "label":"permision-3",
      "value": "permision-3"
    },
    {
      "label":"permision-4",
      "value": "permision-4"
    },

  ]
       
    str:string = '';
    str1:string = '';
  ngOnInit(): void {

    this.moduleForm = new FormGroup({
      
      })


  //   for(let i=1; i<=5;i++){
  //     for(let j=1; j<=i; j++){
  //       this.str  = this.str + '*'    
  //       // console.log("star:",this.str)    
  //     }
  //     this.str = this.str + "\n"
  //     // console.log("new Line:",this.str) 
  // }  
  // console.log(this.str);


//   for(let i=5; i>=1;i--){
//     for(let j=1; j<=i; j++){
//       this.str1  = this.str1 + '*'    
//     }
//     this.str1 = this.str1 + "\n"
// }  
// console.log(this.str1);

}

formModuleGroup:FormGroup | any
formModuleArray:Array<any> = []
formModuleSelectedObj ={}

formModule = ''
onCheckChangeModule(e:any){
this.formModule = e.target.value
  console.log(e.target.value);  //value
  console.log(e.target.checked); //boolean
  
  

  if(e.target.checked){
    this.modules.map( (item:any,i:number)=>{
      if(e.target.value == item.label){

        console.log(Object.assign({},item));
      }
    })
  }
  // Unselected
  else{
     // find the unselected element
     let i: number = 0;
     this.formModuleGroup.controls.forEach((ctrl:any) => {
       if(ctrl.value == e.target.value) {
         // Remove the unselected element from the arrayForm
         this.formModuleGroup.removeAt(i);
         return;
       }
 
       i++;
     });
  }
};

formPermisionArray:any = []
formPermision = ''
onCheckChangePermision(e:any){
  this.formPermision = e.target.value
 this.permision = this.formModuleGroup.get('permision') ;
  console.log(e.target.value);
  console.log(this.permision);

  if(e.target.checked){ 
     this.formPermisionArray.push(e.target.value);
    console.log(this.formPermisionArray);
  }
  // Unselected
  else{
     // find the unselected element
     let i: number = 0;
    this.formPermisionArray.controls.forEach((ctrl:any) => {
       if(ctrl.value == e.target.value) {
         // Remove the unselected element from the arrayForm
         this.formPermisionArray.removeAt(i);
         return;
       }
       i++;
     });
  }
}

onSubmit(){
  this.formResult = []
  console.log("Form_Module:",this.moduleForm.value);

  this.modules.map( (item:any,i:number)=>{
    if(this.formModule == item.label){
      this.formResult.push({})
      console.log(Object.assign({},item));
    }
  })

}

  }





  // module:string = '';
  // isModule:boolean = false;
  // onCheckChangeModule(module:string,event: any) {
  //   this.module = event.target.value;
  //   this.isModule = event.target.checked;
  //   const moduleControl = this.moduleForm.controls[this.module];
  //   console.log("event:", this.module);
  //   console.log(" from_FormControl:", moduleControl.value);
  //   console.log("Object_key:",Object.keys(moduleControl.value));
    
  //   Object.keys(moduleControl.value).forEach((permissionName) => {
  //     console.log("module_Control:",moduleControl);
  //     console.log("get_Permission name:",moduleControl.get(permissionName));
  //     moduleControl.get(permissionName)?.setValue(event.target.checked);
  //   });
  // }

  // permission:string =''
  // isPermission:boolean = false
  // onCheckChangePermission(event: any) {
  //   this.permission = event.target.value;
  //   this.isPermission = event.target.checked
  //   const moduleName = event.target.name;
  //   const permissionName = event.target.value;
  //   const moduleControl = this.moduleForm.controls[moduleName];
  //   // console.log(moduleControl.value);
  //   moduleControl.get(permissionName)?.setValue(event.target.checked);
  // }


 


 

  // onSubmit() {
  //   const result:any = {};
  //   this.modulesFormArray.controls.forEach((permissionsFormArray, moduleIndex) => {
  //     const permissions = permissionsFormArray.value
  //       .map((checked:any, permissionIndex:number) => {
  //         if (checked) {
  //           return this.permissions[permissionIndex].value;
  //         }
  //       })
  //       .filter((value:any) => value !== undefined);
  //     if (permissions.length > 0) {
  //       const moduleName = this.modules[moduleIndex].value;
  //       result[moduleName] = permissions;
  //     }
  //   });
  //   console.log(result);
  // }
  

//   constructor(private formBuilder: FormBuilder){
//     this.moduleForm = this.formBuilder.group({});

//     this.modules.forEach((module:any) => {
//       const permissionsFormArray:any = new FormArray([]);
//       this.permissions.forEach((permission:any) => {
//         permissionsFormArray.push(this.formBuilder.control(false));
//       });
//       this.moduleForm.addControl(module.value, permissionsFormArray);
//     });
//   }

//   ngOnInit(): void {

//     // this.moduleForm = this.fb.group({});
     
//     // this.modules.forEach(module => {
//     //   this.moduleForm.addControl(module.value, this.fb.group({}));
      
//     //   this.permissions.forEach( (permission:any )=> {
//     //     this.moduleForm.controls[module.value].addControl(permission.value, this.fb.control(false));
//     //   });
//     // });   
//   }

  

// this.modules.forEach((module) => {
//   const modulePermissions : any= {};
//   this.permissions.forEach((permission) => {
//     modulePermissions[permission.value] = false;
//   });
//   // The addControl() method adds a control to the FormGroup at runtime. Find the method declaration.
//   // addControl(name: string, control: AbstractControl): void 
//   // name: This is the control name to add to the FormGroup.
//   // control: This is the any implementation class of AbstractControl such as FormGroup, 
//   // FormControl and FormArray.
//   this.moduleForm.addControl(module.value, this.formBuilder.control(modulePermissions));
// });
// console.log("Forms_value:",this.moduleForm.value);
// console.log("Forms_controls:",this.moduleForm.controls);
// }
