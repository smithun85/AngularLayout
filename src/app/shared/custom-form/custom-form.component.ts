import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.scss']
})
export class CustomFormComponent {

  @Input() formControls :FormControl |any;
  @Input() fields : any


  constructor() {
    console.log("Custom-Form:",this.formControls);
  }

}
