import { Component } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  public res1:any = [];
  public res2:any
  constructor(private testService: TestService){};

  ngOnInit(){
   
  }

  testApi(){
    // this.testService.getData1().subscribe( (res)=>{
    //   console.log(res);
    //   this.res1 = res
    // });

    // this.testService.getData2().subscribe( (res)=>{
    //   console.log(res);
    //   this.res2 = res
    // });

       this.testService.getDataWithHeaders().subscribe( (res)=>{
      console.log(res);
      this.res2 = res
    })
  }
}
