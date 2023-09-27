import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggleService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isOpen:boolean = false;
  
  constructor(private toggleService:ToggleService){};

  ngOnInit(){
    this.toggleService.getToggleValue().subscribe( (value:boolean)=>{
      this.isOpen = value
    })
  }

  toggle(){
    // console.log("toggled",this.isOpen);
    this.isOpen = !this.isOpen
    this.toggleService.setToggleValue(this.isOpen)
    // console.log("isOpen:",this.isOpen);
  }
}
