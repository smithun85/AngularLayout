import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logics',
  templateUrl: './logics.component.html',
  styleUrls: ['./logics.component.scss']
})
export class LogicsComponent implements OnInit{
       
    str:string = '';
    str1:string = '';
  ngOnInit(): void {

    for(let i=1; i<=5;i++){
      for(let j=1; j<=i; j++){
        this.str  = this.str + '*'    
        // console.log("star:",this.str)    
      }
      this.str = this.str + "\n"
      // console.log("new Line:",this.str) 
  }  
  console.log(this.str);


  for(let i=5; i>=1;i--){
    for(let j=1; j<=i; j++){
      this.str1  = this.str1 + '*'    
    }
    this.str1 = this.str1 + "\n"
}  
console.log(this.str1);



}

  }
  

