import { Component } from '@angular/core';
import { REUSABLE } from 'src/app/models/re-usable.interface';
import { ReUsableService } from 'src/app/services/re-usable.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {

  public data1:any = [];
  public data2:REUSABLE[] = [];
  public showCount:boolean = false;
  totalCount:number = 0

  constructor(private reusableService:ReUsableService){};
  ngOnInit(){
    this.getData();
    console.log(this.totalCount);
    
  }

  getData(){
    this.reusableService.getReUsable1().subscribe( item=>{
      this.data1 = item
    });

    this.reusableService.getReUsable2().subscribe( item=>{
      this.data2 = item
    })
  };

  countEventHandler(count:any){
    this.totalCount += count
  }
}
