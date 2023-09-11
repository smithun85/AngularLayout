import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderHeaderComponent } from './order-header/order-header.component';



@NgModule({
  declarations: [
    OrderHeaderComponent,
    OrderDashboardComponent,
    OrderTableComponent,   
  ],
  imports: [
    CommonModule
  ],
  exports:[
    OrderHeaderComponent,
    OrderDashboardComponent,
    OrderTableComponent,  
  ]
})
export class AddToCartDashboardModule { }
