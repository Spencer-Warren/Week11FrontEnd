import { Component } from '@angular/core';
import { Task } from '../classes/task';
import { Router } from '@angular/router';
import { RESTAPIService } from '../services/restapiservice.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = [];
  
  constructor(private router: Router, private service: RESTAPIService) { this.getTasks();
  console.log(this.tasks);}
  
  getTasks() {
    this.service.getTasks().subscribe((data: any) => {this.tasks = data});
  }

  createTask() {
    this.router.navigate(['/tasks/create']);
  }

  fakeTasks: Task[] = [
    new Task(1, 'Task 1', 'Description 1', 'To Do', '2021-05-01'),
    new Task(2, 'Task 2', 'Description 2', 'To Do', '2021-05-02'),
    new Task(3, 'Task 3', 'Description 3', 'To Do', '2021-05-03'),
    new Task(4, 'Task 4', 'Description 4', 'To Do', '2021-05-04'),
    new Task(5, 'Task 5', 'Description 5', 'To Do', '2021-05-05')
  ];

  editTask(taskId: number) {
    this.router.navigate(['/tasks/edit', taskId]);
  }
}
