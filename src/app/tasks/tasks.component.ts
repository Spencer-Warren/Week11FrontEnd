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

  constructor(private router: Router, private service: RESTAPIService) {
    this.getTasks();
  }

  getTasks() {
    this.service.getTasks().subscribe((data: any) => { this.tasks = data });
  }

  createTask() {
    this.router.navigate(['/tasks/create']);
  }

  editTask(taskId: number) {
    this.router.navigate(['/tasks/edit', taskId]);
  }

  deleteTask(taskId: number) {
    this.service.deleteTask(taskId).subscribe((data: any) => { this.getTasks() });
  }
}
