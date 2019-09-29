import { Component, Input } from '@angular/core';

@Component({
  selector: 'appout',
  template: `<h1 [ngStyle]="{'background-color':employee}">Good morning {{employee}}! - {{employee2}}</h1> 
  <input  [(ngModel)]="employee" #employeeM="ngModel"><br>
  <input  [(ngModel)]="employee2" #employee2M="ngModel">`,
  styles: [`h1 { font-family: Lato; }`]
})

export class AppoutComponent  {
  @Input() employee: string;
  @Input() employee2: any;
}