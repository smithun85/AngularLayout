import { Component } from '@angular/core';
import { REUSABLE } from 'src/app/models/re-usable.interface';
import { ReUsableService } from 'src/app/services/re-usable.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {

  public setting1:REUSABLE[] = [];
  public setting2:REUSABLE[] = [];
  public showCount:boolean = false;
  totalCount:number = 0

  constructor(private reusableService:ReUsableService){};

  ngOnInit(){
    this.getSetting();
  };

  getSetting(){
      this.reusableService.getReUsableSetting1().subscribe( setting=>{
        this.setting1 = setting
      });

      this.reusableService.getReUsableSetting2().subscribe( setting=>{
        this.setting2 = setting
      })
  };

  countEventHandler(count:any){
    this.totalCount += count
  }

}
