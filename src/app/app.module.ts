import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppoutComponent } from './appout.component';
import { LoopComponentComponent } from './loop-component/loop-component.component';
import { ApiService } from '../api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AppoutComponent, LoopComponentComponent],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
