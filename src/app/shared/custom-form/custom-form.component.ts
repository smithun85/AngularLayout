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
<<<<<<< HEAD
  @Input() name :any
=======
>>>>>>> a88f14b26800f56e1afc6006159efcb9a4c7461d


  constructor() {
    console.log("Custom-Form:",this.formControls);
  }

}
