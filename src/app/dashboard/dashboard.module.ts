import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormListviewComponent } from './form-listview/form-listview.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

import { ATestComponentsModule } from '../a-test-components/a-test-components.module';
import { dashboardRoutingModule } from './dashboard-routing.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [
    AboutComponent,
    ContactsComponent,
    HomeLayoutComponent,
    ProductsComponent,
    OrdersComponent,
    SettingComponent,
    ProductDetailsComponent,
    FormListviewComponent,
   
    

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule,
    BsDropdownModule ,
    ATestComponentsModule,
    dashboardRoutingModule,
    PaginationModule.forRoot(),
  ],
  exports:[RouterModule]
})
export class DashboardModule { }
