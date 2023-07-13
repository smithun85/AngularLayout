import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {

  modules: { [key: string]: string }[] = [
    {
      label: 'module-1',
      value: 'module-1',
    },
    {
      label: 'module-2',
      value: 'module-2',
    },
    {
      label: 'module-3',
      value: 'module-3',
    },
    {
      label: 'module-4',
      value: 'module-4',
    },
    {
      label: 'module-5',
      value: 'module-5',
    },
  ];

  permissions: { [key: string]: string }[] = [
    {
      label: 'permission-1',
      value: 'permission-1',
    },
    {
      label: 'permission-2',
      value: 'permission-2',
    },
    {
      label: 'permission-3',
      value: 'permission-3',
    },
    {
      label: 'permission-4',
      value: 'permission-4',
    },
  ];

  constructor(private formBuilder: FormBuilder) {}
   

  ngOnInit() {}

  checkedData: { [key: string]: string[] } = {};
  isCheckedModule:boolean = false
  onCheckChangeModule(event: any, moduleValue: string) {
    if (event.target.checked) {
      this.isCheckedModule = event.target.checked
        this.checkedData[moduleValue] = [];
    } else {
        delete this.checkedData[moduleValue];
    }
}

//Not completed: output comes if we have not selected the module but permission of this module came. 
onCheckChangePermission(event: any, moduleValue: string, permissionValue: string) {
    if (event.target.checked ) {
      if (!this.checkedData[moduleValue]) {
          this.checkedData[moduleValue] = [];
      }
      this.checkedData[moduleValue].push(permissionValue);
  } else {
      const index = this.checkedData[moduleValue].indexOf(permissionValue);
      if (index > -1) {
          this.checkedData[moduleValue].splice(index, 1);
      }
      if (this.checkedData[moduleValue].length === 0) {
          delete this.checkedData[moduleValue];
      }
  }
 
}

onSubmit() {
  console.log(this.checkedData);
}
}
