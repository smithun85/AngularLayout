import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  lists = [
    {
      number:1,
      name:"home",
      icon:"fa-solid fa-house",
      router:'home'
    },
    {
      number:2,
      name:"users",
      icon:"fa-solid fa-user",
      router:'users'
    },
    {
      number:3,
      name:"Products",
      icon:"fa-solid fa-box",
      router:'products'
    },
    {
      number:4,
      name:"orders",
      icon:"fa-solid fa-cart-shopping",
      router:'orders'
    },
    {
      number:5,
      name:"setting",
      icon:"fa-solid fa-gear",
      router:'setting'
    },
    {
      number:6,
      name:"about",
      icon:"fa-solid fa-circle-info",
      router:'about'
    },
    {
      number:7,
      name:"contacts",
      icon:"fa-solid fa-phone",
      router:'contacts'
    },

    {
      number:8,
      name:"signup",
      icon:"fa-solid fa-user-plus",
      router:'signup'
    }
  ]

}
