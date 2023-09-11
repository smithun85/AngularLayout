import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { SettingComponent } from './setting/setting.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FormListviewComponent } from './form-listview/form-listview.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';

import { ATestComponentsModule } from '../a-test-components/a-test-components.module';
import { dashboardRoutingModule } from './dashboard-routing.module';

import { PaginationModule } from 'ngx-bootstrap/pagination';
import { MatrixModule } from '../matrix/matrix.module';
import { WeatherModule } from '../weather/weather.module';
import { ReUsableComponent } from '../shared/re-usable-component/re-usable.component';
import { CartHomeLayoutComponent } from './behaviorSubject-cart-home-layout/cart-home-layout.component';
import { OrderHeaderComponent } from './BehaviorSubject-Example/order-header/order-header.component';
import { OrderDashboardComponent } from './BehaviorSubject-Example/order-dashboard/order-dashboard.component';
import { OrderTableComponent } from './BehaviorSubject-Example/order-table/order-table.component';




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
    CartHomeLayoutComponent,  
    OrderHeaderComponent,
    OrderTableComponent,
    OrderDashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule ,
    ATestComponentsModule,  //we use this module component here 
    dashboardRoutingModule,
    PaginationModule.forRoot(),
    MatrixModule ,    //we use this module component here ,
    // WeatherModule   //we use Weather module component here ,
   ],
  exports:[RouterModule]
})
export class DashboardModule { }
