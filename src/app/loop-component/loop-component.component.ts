import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'loop-component',
  templateUrl: './loop-component.component.html',
  styleUrls: ['./loop-component.component.css']
})

export class LoopComponentComponent{
// cources:string[]=['C#', 'Java','C++']

  cources;
  constructor(api:ApiService){
     this.cources = api.getall();
    }
}
