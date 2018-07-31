import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
//import { AngularDraggableModule } from 'angular2-draggable';
import {OrderListModule} from 'primeng/orderlist';
import { AngularDualListBoxModule } from 'angular-dual-listbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    PasswordModule,
    CardModule
    //,AngularDraggableModule
    //,OrderListModule
    //,AngularDualListBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
