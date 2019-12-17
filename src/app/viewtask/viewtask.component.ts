import { Component, OnInit } from '@angular/core';
//import {ActivatedRoute } from '@angular/router';
import { TaskmanagerService } from 'src/app/taskmanager.service';
import { Task } from 'src/app/model/task';

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

  constructor(private taskmanagerService: TaskmanagerService) { }

  ngOnInit() {
    this.GetTaskDetails();
  }

  public GetTaskDetails() {

    this.taskmanagerService.getTaskDetails()
      .subscribe(
        taskList => {
          this.tasks = taskList;
          this.filteredTask=taskList;
          console.log(this.tasks);
          console.log(taskList);
        });
  }

  public DeleteTask(taskName) {

    this.taskmanagerService.deleteTaskDetails(taskName)
      .subscribe(
        taskList => {
          console.log("Deleted successfully...")
        });
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
    this.filterSearch();
  }
  onpriorityFromChange(event) {
    this.priorityFromSearchString = event;
    this.filterSearch();
  }
  onpriorityToChange(event) {
    this.priorityToSearchString = event;
    this.filterSearch();
  }

  filterSearch() {
    this.filteredTask = this.tasks;
    //this.filteredTask = this.filteredTask.filter(x => { x.Task.startsWith(this.taskSearchString)
    this.filteredTask = this.filteredTask.filter(x => Object.keys(x).some(y=>
    String(x[y]).toLowerCase().includes(this.taskSearchString.toLowerCase())));
      //{ x.Task}).map(y=>y.Task);
      //String(x.Task.toLowerCase()).startsWith(this.taskSearchString); //&&
    // this.filteredTask = this.filteredTask.filter(x => { if(x.Task!=null){
    //  return x.Task.toLowerCase().startsWith(this.taskSearchString); //&&
        //x.Parent_Task.toLowerCase().startsWith(this.parentSearchString)
    //});
    console.log(this.filteredTask);
    // if (this.priorityFromSearchString > 0) {
    //   this.filteredTask = this.filteredTask.filter(x => {
    //     x.Task.toLowerCase().startsWith(this.taskSearchString) &&
    //       x.Parent_Task.toLowerCase().startsWith(this.parentSearchString) &&
    //       //Number.isInteger(x.Priority as number)
    //       x.Priority.toString().toLowerCase().startsWith(this.parentSearchString)
    //   });
    //   console.log(this.filteredTask);
    // }

    return this.filteredTask;
  }
}
