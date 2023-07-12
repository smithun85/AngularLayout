import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit{

  moduleForm:FormGroup ;
  formResult:any[] = []
  permission?:FormControl

  modules:{[key:string]:string}[] = [
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

  permissions:{[key:string]:string}[] = [
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

  ];





  constructor(private formBuilder: FormBuilder) {
    // Initialize the form group and form controls
   this.moduleForm = this.formBuilder.group({});

   // Create form controls for each module and permission combination using addControl() method
      this.modules.forEach((module) => {
        const modulePermissions:{[key:string]:boolean}= {};
  
        this.permissions.forEach((permission) => {
          modulePermissions[permission['value']] = false;
        });
      
        this.moduleForm.addControl(module['value'], this.formBuilder.control(modulePermissions));
      });
      console.log("Forms_value:",this.moduleForm.value);
      console.log("Forms_controls:",this.moduleForm.controls);
    }

    

  ngOnInit() {
  }
  onSubmit() {
        // Access the selected modules and their permissions on form submission
   
    console.log("entities of form:",Object.entries(this.moduleForm.value));
    const selectedModules = Object.entries(this.moduleForm.value)
    .filter((permissions) => Object.values(permissions).some((value: any) => value))
    .map((module, permissions:any) => {
      const selectedPermissions = Object.keys(permissions).filter((permission:any) => permissions[permission]);
      return { module, permissions: selectedPermissions };
    });

  console.log(selectedModules);
  }



  toggleModulePermissions(module: any, event: any) {
    console.log(event.target.checked);
    // const modulePermissions = this.moduleForm.get(module) as FormGroup;
    // Object.keys(modulePermissions.controls).forEach((permission) => {
    //   const control = modulePermissions.get(permission) as FormControl;
    //   control.setValue(event.target.checked);
    // });
  }

  }


