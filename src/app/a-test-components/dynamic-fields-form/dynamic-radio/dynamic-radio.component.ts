import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-radio',
  templateUrl: './dynamic-radio.component.html',
  styleUrls: ['./dynamic-radio.component.scss']
})
export class DynamicRadioComponent {

  @Input() field:any = {}
@Input() formName:FormGroup | any

}
