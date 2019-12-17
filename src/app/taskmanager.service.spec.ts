import { TestBed } from '@angular/core/testing';

import { TaskmanagerService } from './taskmanager.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('TaskmanagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: TaskmanagerService = TestBed.get(TaskmanagerService);
    expect(service).toBeTruthy();
  });
});
