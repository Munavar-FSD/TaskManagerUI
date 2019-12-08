import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { observable, throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from "../app/model/task";

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {

  private url = "http://localhost:50673/";

  constructor(private http: HttpClient) { }

  getTaskDetails(): Observable<Task[]> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.get<Task[]>(this.url, contentType);
  }

  addTaskDetails(newTask: Task): Observable<Task> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.post<Task>(this.url, newTask, contentType);
  }

  updateTaskDetails(task: Task): Observable<Task> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.put<Task>(this.url, task, contentType);
  }

  deleteTaskDetails(taskId: number): Observable<Task> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.delete<Task>(this.url + '?id=' + taskId, contentType);
  }

}
