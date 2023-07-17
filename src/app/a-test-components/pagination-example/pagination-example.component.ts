import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent {



  usersList:Array<any>=[
    {name:"Raj", email:'ram@gmail.com', id:0},
    {name:"Raj", email:'ram@gmail.com', id:1},
    {name:"Raj", email:'ram@gmail.com', id:2},
    {name:"Raj", email:'ram@gmail.com', id:3},
    {name:"Raj", email:'ram@gmail.com', id:4},
    {name:"Raj", email:'ram@gmail.com', id:5},
    {name:"Raj", email:'ram@gmail.com', id:6},
    {name:"Raj", email:'ram@gmail.com', id:7},
    {name:"Raj", email:'ram@gmail.com', id:8},
    {name:"Raj", email:'ram@gmail.com', id:9},
    {name:"Raj", email:'ram@gmail.com', id:10},
    {name:"Raj", email:'ram@gmail.com', id:11},
    {name:"Raj", email:'ram@gmail.com', id:12},
    {name:"Raj", email:'ram@gmail.com', id:13},
    {name:"Raj", email:'ram@gmail.com', id:14},
    {name:"Raj", email:'ram@gmail.com', id:15},
    {name:"Raj", email:'ram@gmail.com', id:16},
    {name:"Raj", email:'ram@gmail.com', id:17},
  ];

  public page = 1;
  public pageSize = 5

  rotate = true;
  maxSize = 3;

  contentArray: string[] = new Array(50).fill('');
  returnedArray?: string[];
  showBoundaryLinks: boolean = true;
  showDirectionLinks: boolean = true;
  constructor() {}

  pageChanged(event: PageChangedEvent): void {
    console.log("Current_Page:" +event.page);
    console.log("itemPerPage:",event.itemsPerPage);
     const startItem = ((event.page - 1) * event.itemsPerPage);
     const endItem = event.page * event.itemsPerPage;
     console.log("startItem:",startItem);
     console.log("EndItem:",endItem);
     this.returnedArray = this.contentArray.slice(startItem, endItem);
     console.log("returnedArray", this.returnedArray);
  }
  ngOnInit(): void {
     this.contentArray = this.contentArray.map((v: string, i: number) => {
        return 'Line '+ (i + 1);
     });
     this.returnedArray = this.contentArray.slice(0, 5);
  }

  currentPage: number = 1;
  renderPage(event: any) {
    this.currentPage = event

  }

}
