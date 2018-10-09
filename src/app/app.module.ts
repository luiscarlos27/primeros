import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import { AngularSplitModule } from 'angular-split';
import { WorkoutRunnerComponent } from './workout-runner/workout-runner.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutRunnerComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    PasswordModule,
    CardModule,
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
