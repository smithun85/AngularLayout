import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, interval, take, lastValueFrom, of, from,map, tap, filter, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  constructor() {}

  time = new Observable<string>(observer => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });
  // The 'async' Pipe subscribes to an observable or promise and returns the latest value it has emitted.

  ngOnInit() {
// ------------------------------------------------
    this.time.subscribe({
      // next:time=>console.log(`time:${time}`)
    })
// --------------------------------------------
    console.log('=============example: Observable==================');
    let obs = new Observable((observer) => {
      try {
        observer.next(1);
        observer.next(2);
        observer.next(3);

        // observer.error('stopped the execution');
        // observer.complete();
        setTimeout(() => {
          observer.next(4 + ': I am coming late');
          observer.complete();
        }, 2000);
        observer.next(5);
        observer.next(6);
      } catch (err) {
        observer.error(err); // delivers an error if it caught one
      }
    });
    // .subscribe(                        //method -1
    //   {
    //    next: val => console.log(val),
    //   error: err => console.log(err),
    //   complete:() => console.log("completed")
    //   }
    // );
    //----------------------------- method-2:Deprecated-------------------------------
    // obs.subscribe(
    //  val => console.log(val),
    //  err => console.log(err),
    //  () => console.log("completed")
    // )
    //------------------------------------ method-3----------------------------------------
    obs.subscribe({
      next(val) {
        console.log(val);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('completed');
      },
    });

    //=====================================Ex-2===============================================
    // const observable = new Observable((subscriber)=> {
    //   const id = setInterval(() => {
    //     subscriber.next('hi');
    //   }, 1000);
    // });
    //-----------------------------------or-----------------------------------------
    const observable = new Observable(function subscribe_F(subscriber) {
      subscriber.next('executed');
      // Keep track of the interval resource
      const id = setInterval(() => {
        subscriber.next('hi:cancel the execution after 3sec');
      }, 1000);
      // Provide a way of canceling and disposing the interval resource
      //  return function unsubscribe() {
      //   clearInterval(id)
      //  }
    });
    
    const observation = observable.subscribe((val) => console.log(val));
    setTimeout( ()=>{
      observation.unsubscribe();  //cancel the execution.
    }, 3000)


    // ===================Example: Create Observable=====================================
    console.log('========Create Observable==========');
    const obsCreate = Observable.create((observer: any) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();
    }).subscribe({
      next: (val: any) => console.log(val),
      complete: () => console.log('Completed: create()'),
    });

    // ----of() method:(pass multiple arguments)- returns same argument as we pass -----------
    console.log('=====Using of()====');
    const obsOf = of([11, 22, 33, 44, 55], 111, 'of_method', 'Ram', {
      name: 'Ram',
      skill: ['a', 'b', 123],
    });
    try {
      obsOf.subscribe({
        next: (val) => console.log(val),
        complete: () => console.log('Completed: of() method'),
      });
    } catch (err) {
      console.log(err);
    }

    // -------------------from(): (pass only on argument)- returns iterated Observable value----------------
    console.log('===========Using from() operator===========');
    // ----------pass argument as string--------
    const obsFrom1 = from('ram');
    obsFrom1.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('completd: from() operator'),
    });

    // ----------pass argument as array--------
    const obsFrom2 = from([111,222,333])
    obsFrom2.subscribe({
      next : val => console.log(val),
      complete: ()=>console.log('completed: from () Array')
    })

    // ----------pass argument as Promise--------
    const obsFrom3 = from(new Promise( (resolve,reject)=>{
      if(true){
        // resolve('resolved the promises')
        reject('reject the promises')
      };
      
    }))
    obsFrom3.subscribe({
      next:val=> console.log(val),  //call resolve() method
      error:err=> console.log(err), //call reject() method
      complete: ()=>console.log("completed:from() Promises")
    });

     //-------------create Observable using interval() operator:(pass parameter as value):return 0,1,2,3...-------------
     async function execute() {
      const source$ = interval(1000).pipe(take(10));
       source$.subscribe({
        // next:val=>console.log(val)
      })
      const finalNumber = await lastValueFrom(source$); //returns last value
      console.log(`The final number is ${finalNumber}`);
    }
    execute();
    // ------------------------------------



    // ===================Operators:Using pipe=============================
    const arr1 = [1,2,3,4,5,6,7,8,9,10]

    // --------------------------ex-1--------
    async function mapOperator(){
      const obsOperator = new Observable( (observer)=>{
        // observer.next(console.log(arr1));
        observer.next(1);
        observer.next(2);
        observer.complete()
      }).pipe(map( (val)=>{ return val as number *2
      }))
      await obsOperator.subscribe({
        next:val=>console.log(val),
        complete:()=>console.log("Completed:Operator")
      })
    }
    mapOperator()

   // ----------------------------------ex-2:of() operator----------------
    const Operator1 = of(1,2,3,4).pipe(map((val:any)=>{return val*2}))  
    Operator1.subscribe({
      next: val => console.log(val),
      complete: ()=>console.log('completed:USing of()oerator')
    })
    //-------------------ex-3:from() operator-------------------
    const Operator2 = from(arr1).pipe(
      filter( data => data%2==0),
      map( (val)=>{ return val as number /2}) 
    )
    Operator2.subscribe({
      next: val => console.log(`Value: ${val}`),
      complete: ()=>console.log('completed:using from() operator')
    });
    // ----------------------------------end-----------------------

    // ==============================Ex:Subject========================================================
    console.log("==================RxJS Subject================");
    // ---------------------use Subject as Observable----------------
    const subject = new Subject<number>();
    subject.subscribe({
      next:val=> console.log(`observerA: ${val}`)
    })

    subject.next(1);
    subject.next(2);
    subject.subscribe({
      next:val=> console.log(`observerB: ${val}`)
    });
    subject.next(3)
    subject.next(4)
    // --------------------------use Subject as observer-------------------
    console.log('=======use Subject as observer========');
    const subject1 = new Subject<any>();
    subject1.subscribe({
      next:val=> console.log(`observerA: ${val}`)
    });
    subject1.subscribe({
      next:val=> console.log(`observerB: ${val}`)
    });

    const observable1 = from([1,2,3]);
    observable1.subscribe(subject1)
    //--------------------------

    console.log('=======use BehaviorSubject========');
    const subject2 = new BehaviorSubject(0);
    subject2.subscribe({
      next:val=> console.log(`observerA: ${val}`)
    })
    
    subject2.next(1);
    subject2.next(2);

    subject2.subscribe({
      next:val=> console.log(`observerB: ${val}`)
    });

    subject2.next(3)

  } //end ngOnInit()



  

} //end class
