import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-form-listview',
  templateUrl: './form-listview.component.html',
  styleUrls: ['./form-listview.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: false } }]
})
export class FormListviewComponent {

  parent:Array<any>=[]
formList:FormGroup | any;
name:FormControl | any;
parents: FormArray | any;

  constructor(){}
  ngOnInit(){
    this.formList=new FormGroup({
      id:new FormControl(''),
      name:new FormControl(''),
      parents:new FormArray([new FormControl()])

    })

  }

 

  onSubmit(){
    console.log(this.formList);
    // this.parents.push(this.name)
    // console.log(this.parents);
  }

}
