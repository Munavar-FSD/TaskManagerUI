import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { HttpRequest } from '@angular/http';
import { observable, throwError, Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Task } from "../app/model/task";

@Injectable({
  providedIn: 'root'
})

export class TaskmanagerService {

  public currentTaskDetails:Task;
  //private url = "http://localhost:8089/api/Task/";
  private url = "http://localhost:50673/api/Task/";


  constructor(private http: HttpClient) {
    const endpoint = 'http://localhost:50673/api/Task/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  getTaskDetails(): Observable<Task[]> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.get<Task[]>(this.url+'AllTask', contentType);
  }

  addTaskDetails(newTask: Task): Observable<any> {
    const endpoint = 'http://localhost:8089/api/Task/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    console.log(newTask);
    return this.http.post<any>('http://localhost:8089/api/Task/AddTaskById', JSON.stringify(newTask), httpOptions).pipe(
      tap((product) => console.log(`added task`)),
      catchError(this.handleError)
    );
  }

  updateTaskDetails(task: Task): Observable<Task> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.put<Task>(this.url+"EditTaskById", task, contentType);
  }

  deleteTaskDetails(taskId: number): Observable<Task> {
    const contentType = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT,DELETE' }) };
    return this.http.get<Task>(this.url +'DeleteTaskById?taskid=' + taskId, contentType);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
