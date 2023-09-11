import { Component, EventEmitter, Input, Output } from '@angular/core';
import { REUSABLE } from 'src/app/models/re-usable.interface';

@Component({
  selector: 'app-re-usable',
  templateUrl: './re-usable.component.html',
  styleUrls: ['./re-usable.component.scss']
})
export class ReUsableComponent {
 
  @Input() data: any;
  @Input() showCount: any


  @Output() calCount = new EventEmitter<number>();

  ngOnInit(){
    this.calCount.emit(this.data.length)
  };

}
