import { Component } from '@angular/core';
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})

export class DynamicFormComponent {
// export class DynamicFormComponent extends QuestionBase<string>{
//   override controlType = 'textbox';


  
constructor(){

}
firstName:any

modelChanged(event:any){
console.log("modelChanged:",event);
};
firstNameChanged(arg:any) {
  console.log(
      "firstNameChanged  argument:" + arg + "  component: " + this.firstName
  );
}

}
