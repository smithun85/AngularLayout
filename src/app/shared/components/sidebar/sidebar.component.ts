import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  // inputArr:any[] | any
  ngOnInit(): void {
   
//    this.inputArr=[   
//       {
//      number:1,
//      key:'documents',
//      title:"Documents",
//      icon:"fa-solid fa-circle-info",
//      // router:"doc",
//      router:"icon",
//      isAllow: true,
//      is_open: false,
//      parent: '',
//    },
//    {
//      number:2,
//      key:'accounts',
//      title:"Accounts",
//      icon:'fas fa-user-circle',
//      // router:"accounts",
//      router:"symbol",
//      isAllow: false,
//      is_open: false,
//      parent: '',
//    },
//    {
//      number:3,
//      key:'demo_accounts',
//      title:"Demo Accounts",
//      icon:'fas fa-user-circle',
//      // router:"demoAccounts",
//      router:"icon",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:4,
//      key:'live_accounts',
//      title:"Live Accounts",
//      icon:"fa-solid fa-circle-info",
//      // router:"liveAccounts",
//      router:"symbol",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:5,
//      key:'sub_accounts',
//      title:"Sub Accounts",
//      icon:"fa-solid fa-circle-info",
//      // router:"subAccounts",
//      router:"icon",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:6,
//      key:'sub_accounts_child',
//      title:"sub Accounts Child",
//      icon:"fa-solid fa-circle-info",
//      // router:"formListView",
//      router:"symbol",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'sub_accounts',
//    },
//    {
//      number:1,
//      key:'documents',
//      title:"Documents",
//      icon:"fa-solid fa-circle-info",
//      // router:"doc",
//      router:"icon",
//      isAllow: true,
//      is_open: false,
//      parent: '',
//    },
//    {
//      number:2,
//      key:'accounts',
//      title:"Accounts",
//      icon:'fas fa-user-circle',
//      // router:"accounts",
//      router:"symbol",
//      isAllow: false,
//      is_open: false,
//      parent: '',
//    },
//    {
//      number:3,
//      key:'demo_accounts',
//      title:"Demo Accounts",
//      icon:'fas fa-user-circle',
//      // router:"demoAccounts",
//      router:"icon",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:4,
//      key:'live_accounts',
//      title:"Live Accounts",
//      icon:"fa-solid fa-circle-info",
//      // router:"liveAccounts",
//      router:"symbol",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:5,
//      key:'sub_accounts',
//      title:"Sub Accounts",
//      icon:"fa-solid fa-circle-info",
//      // router:"subAccounts",
//      router:"icon",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'accounts',
//    },
//    {
//      number:6,
//      key:'sub_accounts_child',
//      title:"sub Accounts Child",
//      icon:"fa-solid fa-circle-info",
//      // router:"formListView",
//      router:"symbol",
//      isAllow: true,
//      is_active: false,
//      is_open: false,
//      parent: 'sub_accounts',
//    }
//  ]
  }

  

  lists = [
    {
      number:1,
      name:"home",
      icon:"fa-solid fa-house",
      router:'home',
      
    },
    {
      number:10,
      name:"weather",
      icon:"fa-solid fa-cloud",
      router:'weather',
      
    },
    {
      number:2,
      name:"users",
      icon:"fa-solid fa-user",
      router:'users',
     
    },
    {
      number:3,
      name:"Products",
      icon:"fa-solid fa-box",
      router:'products',
     
    },
    {
      number:4,
      name:"orders",
      icon:"fa-solid fa-cart-shopping",
      router:'orders',
     
    },
    {
      number:5,
      name:"setting",
      icon:"fa-solid fa-gear",
      router:'setting',
      
    },
    {
      number:6,
      name:"about",
      icon:"fa-solid fa-circle-info",
      router:'about',
     
    },
    {
      number:7,
      name:"contacts",
      icon:"fa-solid fa-phone",
      router:'contacts',  
      
    },

    {
      number:8,
      name:"signup",
      icon:"fa-solid fa-user-plus",
      router:'signup', 
      
    },

    {
      number:9,
      name:"formListView",
      router:"formListView",
      menu: false,
      submenu: [],
    }, 
  ]


  // =============================================
  visible:boolean = true
  visible1:boolean = true
  inputArr=[   
    {
   number:1,
   key:'documents',
   title:"Documents",
   icon:"fa-solid fa-circle-info",
   router:"setting",
   parent: '',
 },
 {
   number:2,
   key:'accounts',
   title:"Accounts",
   icon:'fas fa-user-circle',
   router:"",
   parent: '',
 },
 {
   number:3,
   key:'demo_accounts',
   title:"Demo Accounts",
   icon:'fas fa-user-circle',
   router:"contacts",
   parent: 'accounts',
 },
 {
   number:4,
   key:'live_accounts',
   title:"Live Accounts",
   icon:"fa-solid fa-circle-info",
   router:"about",
   parent: 'accounts',
 },
 {
   number:5,
   key:'sub_accounts',
   title:"Sub Accounts",
   icon:"fa-solid fa-circle-info",
   router:"",
   parent: 'accounts',
 },
 {
   number:6,
   key:'sub_accounts_child',
   title:"sub Accounts Child",
   icon:"fa-solid fa-circle-info",
   router:"orders",
   parent: 'sub_accounts',
 },
]

toggle() {
 this.visible = !this.visible
};

toggle1(){ 
  this.visible1 = !this.visible1
  
}

getChildItems(parentItems: any): any[] {
  return this.inputArr.filter((item:any) => item.parent === parentItems.key);
}


 
// ==================================================================






// menuItems = [  
//   {
//     linkText:"about",
//     icon:"fa-solid fa-circle-info",
//     parentLink:'about',
//     menu: false,
//     submenu: [],
//   },
//   {
//     linkText: "menu-list-1",
//     parentLink: "",
//     menu: false,
//           submenu: [
//       {
//         childName: "Icon",
//         childRouter: "icon",
//         grandSubMenu:[]
//       },
//       {
//         childName: "Label",
//         childRouter: "label",
//         grandSubMenu:[]
//       },
//       {
//         childName: "Symbol",
//         childRouter: "symbol",
//         grandSubMenu:[
//           {
//             grandChildName:'item1',
//             grandChildRouter:""
//           },
//           {
//             grandChildName:'item1',
//             grandChildRouter:""
//           }
//         ]
//       },
//     ]
//   },
//   {
//     "linkText": "menu-item-2",
//     "parentLink": "",
//     "menu": false,
//           submenu: [
//       {
//         childName: "item-1",
//         childRouter: ""
//       },
//       {
//         childName: "item-2",
//         childRouter: ""
//       },
//       {
//         childName: "item-3",
//         childRouter: ""
//       },
//     ]
//   },

// ]

// clickToggle(i: number) {
//   this.menuItems[i].menu = !this.menuItems[i].menu;
// }

}
