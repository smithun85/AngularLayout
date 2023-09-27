import { Component } from '@angular/core';
import { ToggleService } from 'src/app/services/toggleService';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent {
  isOpen:boolean = true;
  constructor(private toggleService:ToggleService){}
  ngOnInit(){
    this.toggleService.getToggleValue().subscribe((val:boolean)=>{
      this.isOpen = val
    })
  }
}
