import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { REUSABLE } from '../models/re-usable.interface';
import { data1, data2 } from './data/commonData';
import { Setting1, Setting2 } from './data/commonData';

@Injectable({
  providedIn: 'root'
})
export class ReUsableService {

  private data1:REUSABLE[]=data1;
  private data2:REUSABLE[]=data2;

  constructor() { };

  getReUsable1():Observable<REUSABLE[]>{
    return of(this.data1)
  };

  getReUsable2():Observable<REUSABLE[]>{
    return of(this.data2)
  };

  getReUsableSetting1():Observable<REUSABLE[]>{
    return of(Setting1)
  };

  getReUsableSetting2():Observable<REUSABLE[]>{
    return of(Setting2)
  };

}
