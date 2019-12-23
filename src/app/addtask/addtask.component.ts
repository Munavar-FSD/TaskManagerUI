import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskmanagerService } from 'src/app/taskmanager.service';
import { Task } from 'src/app/model/task';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  text = 'add task';
  taskDetails: Task;
  submitted = false;
  public taskDetail; priority; parentDetails; startDate; endDate;
  constructor(private taskmanagerService: TaskmanagerService, private router: Router) { }

  ngOnInit() {

  }

  public addTaskDetails(taskform, taskList) {

    this.taskDetails = {
      Task_ID: null, Parent_ID: null, Task: taskList.taskDetail, Parent_Task: taskList.parentDetails,
      Start_Date: taskList.startDate, End_Date: taskList.endDate,
      Priority: taskList.priority, Status: 'New'

    }

    this.taskmanagerService.addTaskDetails(this.taskDetails)
      .subscribe(
        taskList => {
          console.log("Saved successfully..");
          alert("Task saved successfully..");
          taskform.reset();
        });
  }

  onSubmit(): void {
    this.submitted = true;
  }

  onReset(form) {
    form.reset();
  }

}
