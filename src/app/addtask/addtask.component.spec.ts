import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { AddtaskComponent } from './addtask.component';
import { DebugElement } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { TaskmanagerService } from 'src/app/taskmanager.service';

describe('AddtaskComponent', () => {
  let component: AddtaskComponent;
  let fixture: ComponentFixture<AddtaskComponent>;
  let el:HTMLElement;
  let de:DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,FormsModule,HttpClientTestingModule],
      declarations: [ AddtaskComponent ],
      providers: [TaskmanagerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  // it(`form should be invalid`, async(()=>{
  //   expect(component.addTaskDetails).toEqual(`add task`);
  // }));
});
