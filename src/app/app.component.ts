import { Component, OnInit  } from '@angular/core';
//import { DualListComponent } from 'angular-dual-listbox';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '- Nueva App con Angular 5 y primeng 6';
  confirmed:Array<any>;

  ngOnInit() {
     this.confirmed = [
      { _id: 1, name: 'Pawn' }
    ]
  } 
}