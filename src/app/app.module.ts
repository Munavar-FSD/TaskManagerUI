import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddtaskComponent,
    UpdatetaskComponent,
    ViewtaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'addtask', component: AddtaskComponent},
      {path:'', redirectTo:'addtask', pathMatch: 'full'},
      {path: 'viewtask', component: ViewtaskComponent}]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
