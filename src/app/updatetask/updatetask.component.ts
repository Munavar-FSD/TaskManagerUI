import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskmanagerService } from 'src/app/taskmanager.service';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent implements OnInit {
  taskDetails: Task;
  updateTaskId: number = 0;
  updateParentTaskId: number = 0;
  public taskDetail; priority; parentDetails; startDate; endDate;
  constructor(private taskmanagerService: TaskmanagerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let updateTask = this.taskmanagerService.currentTaskDetails;
    if (updateTask != undefined) {
      this.updateTaskId = updateTask.Task_ID;
      this.updateParentTaskId = updateTask.Parent_ID;
      this.taskDetail = updateTask.Task;
      this.parentDetails = updateTask.Parent_Task;
      this.priority = updateTask.Priority;
      this.startDate = updateTask.Start_Date;
      this.endDate = updateTask.End_Date;
    }
    console.log(this.taskDetail);
    this.activatedRoute.params.subscribe(params => {
      this.updateTaskId = params['id'],
        this.updateParentTaskId = params['pid']
    });
    console.log(this.updateTaskId);
    console.log(this.updateParentTaskId);
  }

  public updateTaskDetails(taskform, taskList) {

    this.taskDetails = {
      Task_ID: this.updateTaskId, Parent_ID: this.updateParentTaskId, Task: taskList.taskDetail, Parent_Task: taskList.parentDetails,
      Start_Date: taskList.startDate, End_Date: taskList.endDate,
      Priority: taskList.priority, Status: 'Update'

    }

    this.taskmanagerService.updateTaskDetails(this.taskDetails)
      .subscribe(
        taskList => {
          console.log("Updated successfully...");
          alert("Task updated successfully");
          taskform.reset();
          this.router.navigate(['/viewtask']);
        });
  }
}
