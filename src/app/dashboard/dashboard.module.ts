import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactsComponent,
    HomeLayoutComponent,
    ProductsComponent,
    OrdersComponent,
    SettingComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports:[
    HomeLayoutComponent,
  ]
})
export class DashboardModule { }
