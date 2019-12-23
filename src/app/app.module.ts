import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';
import {HashLocationStrategy,LocationStrategy} from '@angular/common';
import { Task } from './model/task';

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
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'addtask', component: AddtaskComponent},
      {path:'', redirectTo:'addtask', pathMatch: 'full'},
      {path: 'viewtask', component: ViewtaskComponent},
      {path: 'updatetask', component: UpdatetaskComponent}],{useHash:true}),
      // {path: 'updatetask/:id/:pid', component: UpdatetaskComponent}],{useHash:true}),
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
