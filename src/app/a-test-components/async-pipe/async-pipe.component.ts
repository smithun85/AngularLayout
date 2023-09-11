import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ASYNCPIPE } from 'src/app/models/async-pipe.interface';
import { AsyncPipeService } from 'src/app/services/async-pipe.service';

@Component({
  selector: 'app-async-pipe',
  templateUrl: './async-pipe.component.html',
  styleUrls: ['./async-pipe.component.scss']
})
export class AsyncPipeComponent {

  pizzas$!: Observable<ASYNCPIPE[]>;

  constructor(private asyncPipeService:AsyncPipeService){};

  ngOnInit(){
    this.getPizza()
  };

  getPizza(){
   this.pizzas$ = this.asyncPipeService.getAsyncPipe()
  };
}
