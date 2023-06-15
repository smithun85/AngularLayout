import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-pagination-example',
  templateUrl: './pagination-example.component.html',
  styleUrls: ['./pagination-example.component.scss']
})
export class PaginationExampleComponent {



  usersList:Array<any>=[
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
    {name:"Raj", email:'ram@gmail.com', random:Math.random()},
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
    console.log("Event of Page:" +event.page);
     const startItem = (event.page - 1) * event.itemsPerPage;
     const endItem = event.page * event.itemsPerPage;
     console.log(startItem);
     this.returnedArray = this.contentArray.slice(startItem, endItem);
  }
  ngOnInit(): void {
     this.contentArray = this.contentArray.map((v: string, i: number) => {
        return 'Line '+ (i + 1);
     });
     this.returnedArray = this.contentArray.slice(0, 5);
  }

  pagination: number = 1;
  renderPage(event: any) {
    this.pagination = event;

  }

}
