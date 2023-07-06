import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit{
 @Input() item:any

 is_open:boolean = false

 ngOnInit(): void {
   console.log(this.item);

  
 }

 toggleItem(item: any) {
  this.is_open = !this.is_open;
};
}
