import { ASYNCPIPE } from "../../models/async-pipe.interface";
import { REUSABLE } from "../../models/re-usable.interface";

export const data1:REUSABLE[] = [{
    name : 'Sam Johnson',
    dept : 'Electrical'
  },{
    name : 'Roy Thomas',
    dept : 'Mechanical'
  },{
    name : 'Jim Lasker',
    dept : 'Medical'
  }];

 export const data2:REUSABLE[] = [{
    name : 'Johnson',
    dept : 'Physics'
  },{
    name : 'Thomas',
    dept : 'Chemistry'
  },{
    name : 'Lasker',
    dept : 'Biology'
  }];

  export const Setting1:REUSABLE[] = [{
    name : 'Setting-1',
    dept : 'Physics'
  },{
    name : 'seting-2',
    dept : 'Chemistry'
  },{
    name : 'setting-2',
    dept : 'Biology'
  }];

  export const Setting2:REUSABLE[] = [{
    name : 'setting-1',
    dept : 'Physics'
  },{
    name : 'setting-2',
    dept : 'Chemistry'
  },{
    name : 'setting-3',
    dept : 'Biology'
  },{
    name : 'setting-4',
    dept : 'Math'
  }
];


export const pizza:ASYNCPIPE[] = [
{ id: "j8P9sz", name: "Pepperoni", price: 899 },
{ id: "tMot06", name: "Supreme", price: 999 },
{ id: "x9sD3g", name: "Sizzler", price: 899 },
];



// export const dynamicForm:DYNAMICFORM[] = []