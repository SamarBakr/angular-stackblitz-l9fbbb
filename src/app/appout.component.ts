import { Component, Input } from '@angular/core';

@Component({
  selector: 'appout',
  template: `
  <h1 [ngStyle]="{'background-color':background||'black','color':font||'grey'}">Good morning</h1> 
  <input  [(ngModel)]="background"placeholder="text-background-color">
  <br>
  <input  [(ngModel)]="font" placeholder="font-color">
  `,
  styles: [`h1 { font-family: Lato; }`]
})

export class AppoutComponent  {
  background="red";
  font="yellow";
}