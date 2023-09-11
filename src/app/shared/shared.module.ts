import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { WeatherModule } from '../weather/weather.module';
import { ReUsableComponent } from '../shared/re-usable-component/re-usable.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    MenuItemsComponent,
    ReUsableComponent,  
  ],
  imports: [
    CommonModule,
    RouterModule,
    WeatherModule   //we use Weather module component here ,
  ],
  exports:[
    SidebarComponent,  //exports b/c we use SidebarComponent in other module
    HeaderComponent ,  //same ,,
    ReUsableComponent,
  ]
})
export class SharedModule { }
