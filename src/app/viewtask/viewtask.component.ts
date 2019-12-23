import { Component, OnInit } from '@angular/core';
import { TaskmanagerService } from 'src/app/taskmanager.service';
import { Task } from 'src/app/model/task';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css']
})
export class ViewtaskComponent implements OnInit {
  tasks: Task[] = [];
  taskSearchString: string = '';
  parentSearchString: string = '';
  priorityFromSearchString: number = 0;
  priorityToSearchString: number = 0;
  filteredTask: Task[] = [];

  constructor(private taskmanagerService: TaskmanagerService, private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.GetTaskDetails();
  }

  public GetTaskDetails() {

    this.taskmanagerService.getTaskDetails()
      .subscribe(
        taskList => {
          this.tasks = taskList;
          this.filteredTask = taskList;
          console.log(this.tasks);
          console.log(taskList);
        });
  }

  public onUpdate(taskId) {
    this.taskmanagerService.currentTaskDetails = this.tasks.find(x => x.Task_ID == taskId);
    console.log(this.taskmanagerService.currentTaskDetails);
    this.route.navigate(['/updatetask']);
  }

  public DeleteTask(taskName) {

    this.taskmanagerService.deleteTaskDetails(taskName)
      .subscribe(
        taskList => {
          console.log("Deleted successfully...")
          //alert("Task deleted successfully");
        });

    this.GetTaskDetails();
    alert("Task deleted successfully");
  }

  onSearchTaskManager(etaskName, eParentName, ePriority) {
    console.log(etaskName + '-' + eParentName + '-' + ePriority);

  }

  ontaskNameChange(event) {
    this.taskSearchString = event;
    this.filterSearch();
  }

  onparentNameChange(event) {
    this.parentSearchString = event;
    this.filteredTask = this.tasks;
    this.filteredTask = this.filteredTask.filter(x => Object.keys(x).some(y =>
      String(x[y]).toLowerCase().includes(this.parentSearchString.toLowerCase())));
  }
  onpriorityFromChange(event) {
    this.priorityFromSearchString = event;
  }
  onpriorityToChange(event) {
    this.priorityToSearchString = event;
    this.filterSearch();
  }

  filterSearchByDate(event) {
    this.filteredTask = this.tasks;
    this.filteredTask = this.filteredTask.filter(
      m => new Date(event) >= new Date(m.Start_Date))
  }
  filterSearch() {
    this.filteredTask = this.tasks;
    this.filteredTask = this.filteredTask.filter(x => Object.keys(x).some(y =>
      String(x[y]).toLowerCase().includes(this.taskSearchString.toLowerCase())));

    console.log(this.filteredTask);

    return this.filteredTask;
  }
}
