import { Component, OnInit } from '@angular/core';

interface Person{
  firstName:string,
  lastName:string,
  age:number,
  email:string,
  city?:string
};


interface Library{
  name:string,
  books:Array<{title:string, auther:string,pages:number }>
};

interface Iconflux{
  departments:{
    dept_Name:string,
    roles:string,
    employees:Array<{name:string, id:number, Address:{house_No:string,post:string,PS:string,distric:string,pin:number}}>
  }
};

interface BookDetails{
 title:string,
 auther:string,
 rating:number 
};

interface Animal{
  species:string;
  sound:string;
  name?:string
}

@Component({
  selector: 'app-logics-array-object',
  templateUrl: './logics-array-object.component.html',
  styleUrls: ['./logics-array-object.component.scss']
})
export class LogicsArrayObjectComponent implements OnInit{

  public hotels = [
    {
      icon: "bar_chart",    
      label: "Hyatt Reports",
      module_name: "hyatt-report",
      subModules:[
        {name: 'hyatt-hyatt-asset-hyatt', label: 'Asset Inventory', icon: 'table_chart'},
        {name: 'hyatt-bandwidth', label: 'Bandwidth Report', icon: 'table_chart'},
        {name: 'hyatt-call', label: 'Ticket Summary', icon: 'table_chart'},
        {name: 'hyatt-case', label: 'Case Report', icon: 'table_chart'},
        {name: 'hyatt-current', label: 'Current Network Device Status', icon: 'table_chart'},
        {name: 'hyatt-device', label: 'Device Status and Uptime', icon: 'table_chart'}
      ]
    },
    {
      icon: "bar_chart",    
      label: "Taj Reports",
      module_name: "taj-report",
      subModules:[
        {name: 'taj-asset', label: 'Asset Inventory', icon: 'table_chart'},
        {name: 'taj-bandwidth', label: 'Bandwidth Report', icon: 'table_chart'},
        {name: 'taj-call', label: 'Ticket Summary', icon: 'table_chart'},
        {name: 'taj-case', label: 'Case Report', icon: 'table_chart'},
        {name: 'taj-current', label: 'Current Network Device Status', icon: 'table_chart'},
        {name: 'taj-device', label: 'Device Status and Uptime', icon: 'table_chart'}
      ]
    },
  ]

public calculator:{add:Function,subtract:Function,multiply:Function,divide:Function} = {
        add:()=>{},
        subtract:()=>{},
        multiply:()=>{},
        divide:()=>{},
      };
public add:number = 0;
public subtarct:number = 0;
public multiple:number = 0;
public divide:number = 0;

public studentGrades:any ={}


  ngOnInit(): void {
    this.getHotels();
    this.getQuestion1();
    this.getQuestion2();
    this.getQuestion3();
    this.getQuestion4();
    this.getQuestion5();
    this.getQuestion6();
    this.getQuestion7();
    this.getQuestion8();
    this.getQuestion9();
    this.getQuestion10();
    this.getQuestion11();
    this.getQuestion12();
  };

  getHotels(){
    let hyatt = this.hotels.filter( hotel => hotel.module_name =='hyatt-report')
    // console.log(hyatt);
    let subModules = hyatt[0].subModules.map(submodule=>
      // console.log(submodule.name)
      // Object.assign({},submodule,{name:`marriott${submodule.name.split('hyatt')[1]}`})
      Object.assign({},submodule,{name:`${submodule.name.replaceAll('hyatt','marriott')}`})
       );
    console.log(subModules);
  }

  getQuestion1(){
//     Exercise 1: Creating and Modifying Objects
// Create an object named person with properties: firstName, lastName, age, and email.
// Update the age property of the person object to a new value.
// Add a new property city to the person object.

//create an object
let person:Person = {
  firstName:"Ram",
  lastName:"kumar",
  age:24,
  email:"ram@gmail.com"
};
console.log('person',person);
//update the age;
person.age = 30;
console.log('UpdatedAge:',person); 
//add new city:
// method-1
let addCity:Person = {...person,city:'Ahmedabad'}
console.log('Person_City:',addCity);
// method-2:Create new object
let addCity1:Person = Object.assign({},person,{city:'Ahmedabad_Gujrat'})
console.log('Person_City_1:',addCity1);
// method-2:Update old object
Object.assign(person,{city:'Ahmedabad_Gujrat'})
console.log('Person_City_update:',person);

  };
  getQuestion2(){
// Exercise 2: Object Methods
// Create an object named calculator with methods: add, subtract, multiply, and divide.
// Implement each method to perform the respective operation on two input numbers.
// Use the methods to perform calculations and display the results.

  this.calculator = {

  add:(a:number,b:number)=>{
    console.log(`Addition:${a} + ${b} = ${a+b}`)
    this.add = a+b;
  },
  subtract:(a:number,b:number)=>{
    console.log(`subtract:${a} - ${b} = ${a-b}`)
    this.subtarct = a-b
  },
  multiply:(a:number,b:number)=>{
    console.log(`multiply:${a} * ${b} = ${a*b}`)
    this.multiple = a*b
  },
  divide:(a:number,b:number)=>{
    console.log(`division:${a} / ${b} = ${a/b}`)
    this.divide = a/b
  },
}
  this.calculator.add(10,20);
  this.calculator.subtract(30,15);
  this.calculator.multiply(3,7);
  this.calculator.divide(15,3)

  };
  getQuestion3(){
    // Exercise 3: Object Iteration
// Create an object called studentGrades with student names as keys and their respective grades as values.
// Iterate through the object and display each student's name and grade.
this.studentGrades = {
  "Ram":'A',
  "Sanjeev":'A++',
  "Rajeev":'B++',
  "Ramesh":'C+'
};

for(let key in this.studentGrades ){
  console.log(`the students name is ${key} whose respective grade is ${this.studentGrades[key]}`);
}

  };
  getQuestion4(){
    // Exercise 4: Array Manipulation
// Create an array named numbers containing a sequence of numbers.
// Add a new number to the end of the array.
// Remove the first element from the array.
// Sort the array in ascending order.

let numbers:number[] = [10, 12, 19, 33, 8, 28, 13];
// add an element
numbers.push(55);
console.log(`55 is added in last: ${numbers}`);
// remove 1st element;
numbers.shift()
console.log(`remove 1st element:${numbers}`);
// sorting asscending order:
numbers.sort( (a:number,b:number)=> a-b)
console.log(`sorted assending order: ${numbers}`);
  };
  getQuestion5(){
    // Exercise 5: Array Filtering and Mapping
// Create an array of objects, each representing a book with properties title, author, and rating.
// Filter the array to get only the books with a rating above 4.
// Create a new array containing the titles of the highly rated books.
let bookDetails:BookDetails[] = [
  {
  title:"Ramayana",
  auther:"Tulsi Das",
  rating:5
},
{
  title:"Bhaagwat Geeta",
  auther:"balmiki",
  rating:4.5
},
{
  title:"Two states",
  auther:"Chetan Bhagat",
  rating:5
},
{
  title:"born poor die rich",
  auther:" Kayode Eniraiyetan",
  rating:4
},
{
  title:"book-1",
  auther:"test",
  rating:3
},
];
// filter the object_rating > 4;
let filteredBooks = bookDetails.filter(books=>books.rating > 4)
console.log(filteredBooks);

// create a new array of highly rated books;
let newArrBook:any[] = []

filteredBooks.map(books=>{
  for(let key in books){
    if(key == 'title'){
      console.log(books[key]);
 
      newArrBook.push(books[key]);
    }   
  };
  
})

console.log(newArrBook);

  };

  getQuestion6(){
    // Exercise 6: Object Nested Array
// Create an object named library with properties: name and books.
// The books property should be an array of objects, each representing a book.
// Each book should have properties like title, author, and pages.
let library:Library = {
  name:'nobel',
  books:[
    {
      title:"Two states",
      auther:"Chetan Bhagat",
      pages:150
    },
    {
      title:"born poor die rich",
      auther:" Kayode Eniraiyetan",
      pages:200
    },
    {
      title:"book-1",
      auther:"test",
      pages:300
    },
  ]
}
console.log(library);
  };

  getQuestion7(){
    // Exercise 7: Array Methods and Reduction
// Create an array of numbers.
// Use the map method to square each number in the array.
// Use the reduce method to calculate the sum of all squared numbers.
let numbers = [11,12,2,4,6];
// square of elements of array
let squareArr = numbers.map(number=>number*number)
console.log("Square of array is",squareArr);
// sum of array:
let sum = numbers.reduce((total, number)=> total += number);
console.log("Sum of Array elements:", sum);
  };

  getQuestion8(){
//     Exercise 8: Object Inheritance
// Create a base object named animal with properties species and sound.
// Create a new object dog that inherits from the animal object.
// Override the sound property of the dog object to make it specific for dogs.
let animal:Animal = {
  species:"",
  sound:""
};
// Create a new object dog that inherits from the animal object.
let dog:Animal = Object.create(animal)
dog.species = "Dog"
dog.name = "Copper"  //create new key value in inherited object of dog
dog.sound = "bow-bow"  //Override the sound property of the dog object to make it specific for dogs.

console.log("Animal_Object",animal);
console.log("Inherited_animal",dog);

  };

  getQuestion9(){
    // Exercise 9: Array Searching
// Create an array of strings representing names.
// Use the includes method to check if a specific name exists in the array.
// Use the indexOf method to find the index of a name in the array.
let names = ['Amit', 'Shiva','raj',"kohli",'pant']
// Use the includes method to check if a specific name exists in the array.
console.log("Name exists", names.includes('Shiva'));
console.log("name does not exist:",names.includes('Shiva1'));
// Use the indexOf method to find the index of a name in the array.
console.log("Index:",names.indexOf('kohli'));
console.log("Index(element does not exist):",names.indexOf('kohli1'));
  };

  getQuestion10(){
    // Exercise 10: Object Complexities
// Create a nested object structure representing a company's departments, employees, and roles.
// Access specific employee information using object notation.
let iconflux:Iconflux = {
  departments:{
    dept_Name:"IT",
    roles:"developer",
    employees:[
      {
      name:"Sam",
      id:1,
      Address:{
        house_No:'A-120',
        post:"Doi",
        PS:"meherma",
        distric:"Godda",
        pin:814160
      }
    },
    {
      name:"Sam-1",
      id:2,
      Address:{
        house_No:'B-120',
        post:"Doi-1",
        PS:"meherma1",
        distric:"Godda1",
        pin:814161
      }
    },
    {
      name:"Sam-2",
      id:3,
      Address:{
        house_No:'c-120',
        post:"Doi-3",
        PS:"meherma",
        distric:"Godda",
        pin:813206
      }
    }
  ],
    
  }
};
console.log(iconflux.departments.dept_Name);
iconflux.departments.employees.map( item=>{
  if(item.name =="Sam"){
    console.log("Address of Sam",item.Address);
  }
})
  };

  getQuestion11(){
    let str = "AABBCDDE";
    let letterCounts:any = {};
    
    // Count the occurrences of each letter
    for (let i = 0; i < str.length; i++) {
      let letter = str[i];
      // console.log(letter);
    
      if (letterCounts[letter]) {  //update the key {"A":2,...}
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1; // first set the key-value pairs {"A":1,...}
      }
      console.log(letterCounts[letter]); 
      console.log(letterCounts);    //{A: 2, B: 2, C: 1, D: 2, E: 1}
    }   
    // Find non-repeated letters
    let nonRepeatedLetters = [];
    for (let letter in letterCounts) {
      if (letterCounts[letter] === 1) {
        nonRepeatedLetters.push(letter);
      }
    }    
    console.log(nonRepeatedLetters); // Output: ["C"]
  };

  getQuestion12(){
 
  }

}
