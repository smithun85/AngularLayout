import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-logics',
  templateUrl: './logics.component.html',
  styleUrls: ['./logics.component.scss']
})
export class LogicsComponent implements OnInit{

  moduleForm:FormGroup | any;
  formResult:Array<any> = []
  permision:FormControl|any

  modules:Array<any> = [
    {
      "label":"module-1",
      "value":"module-1"
    },
    {
      "label":"module-2",
      "value":"module-2"
    },
    {
      "label":"module-3",
      "value":"module-3"
    },
    {
      "label":"module-4",
      "value":"module-4"
    },
    {
      "label":"module-5",
      "value":"module-5"
    },

  ];

  permisions:Array<any> = [
    {
      "label":"permision-1",
      "value": "permision-1"
    },
    {
      "label":"permision-2",
      "value": "permision-2"
    },
    {
      "label":"permision-3",
      "value": "permision-3"
    },
    {
      "label":"permision-4",
      "value": "permision-4"
    },

  ]
       
    str:string = '';
    str1:string = '';
  ngOnInit(): void {

    this.moduleForm = new FormGroup({
      module : new FormGroup({
        permision:new FormControl()
      }),
     
    })


  //   for(let i=1; i<=5;i++){
  //     for(let j=1; j<=i; j++){
  //       this.str  = this.str + '*'    
  //       // console.log("star:",this.str)    
  //     }
  //     this.str = this.str + "\n"
  //     // console.log("new Line:",this.str) 
  // }  
  // console.log(this.str);


//   for(let i=5; i>=1;i--){
//     for(let j=1; j<=i; j++){
//       this.str1  = this.str1 + '*'    
//     }
//     this.str1 = this.str1 + "\n"
// }  
// console.log(this.str1);

}

formModuleGroup:FormGroup | any
formModuleArray:Array<any> = []
formModuleSelectedObj ={}

formModule = ''
onCheckChangeModule(e:any){
this.formModule = e.target.value
  console.log(e.target.value);  //value
  console.log(e.target.checked); //boolean
  
  

  if(e.target.checked){
    this.modules.map( (item:any,i:number)=>{
      if(e.target.value == item.label){

        console.log(Object.assign({},item));
      }
    })
  }
  // Unselected
  else{
     // find the unselected element
     let i: number = 0;

     this.formModuleGroup.controls.forEach((ctrl:any) => {
       if(ctrl.value == e.target.value) {
         // Remove the unselected element from the arrayForm
         this.formModuleGroup.removeAt(i);
         return;
       }
 
       i++;
     });
  }
};

formPermisionArray:any = []
onCheckChangePermision(e:any){
 this.permision = this.formModuleGroup.get('permision') ;
  console.log(e.target.value);
  console.log(this.permision);

  if(e.target.checked){ 
     this.formPermisionArray.push(e.target.value);
    console.log(this.formPermisionArray);
  }
  // Unselected
  else{
     // find the unselected element
     let i: number = 0;
    this.formPermisionArray.controls.forEach((ctrl:any) => {
       if(ctrl.value == e.target.value) {
         // Remove the unselected element from the arrayForm
         this.formPermisionArray.removeAt(i);
         return;
       }
       i++;
     });
  }
}

onSubmit(){
  this.formResult = []
  console.log("Form_Module:",this.moduleForm.value);

  // this.modules.map( (item:any,i:number)=>{
  //   if(e.target.value == item.label){

  //     console.log(Object.assign({},item));
  //   }
  // })

}

  }
  

