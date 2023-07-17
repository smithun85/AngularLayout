import { Component } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  url:string = ''
  navStart:Observable<NavigationStart>;
  constructor(private router:Router, private activatedRoute: ActivatedRoute){

    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  };

  // this.router.events.subscribe((event) => {
  //   if (event instanceof NavigationStart) {
  //     this.url = event.url;
  //   }
  // });
  ngOnInit(){
    this.navStart.subscribe(() => console.log('Navigation Started!'));
  }

  onCustomPipe(){
    this.router.navigate(['/pipe'])
  }

  onDynamicForm(){
    this.router.navigate(['/form'])
  }

  onPaginations(){
    this.router.navigate(['/paginationPath'])
    this.router.events.subscribe(path=>console.log(path))
  };

  onTest(){
    this.router.navigate(['/test']);
    this.activatedRoute.url.subscribe({
      next:url=>console.log(`The URL changed to:${url}`)
    })
  }

  onLogics(){
    this.router.navigate(['/logics'])
  }

  onCheckbox(){
    this.router.navigate(['/checkbox'])
  };

  onLoginCustom(){
    this.router.navigate(['/login-test'])
  }

  onMatrixMultiple(){
    this.router.navigate(['/matrix'])
  }
}
