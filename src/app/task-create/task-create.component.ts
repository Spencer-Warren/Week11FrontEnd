import { Component } from '@angular/core';
import { TaskNoId } from '../classes/task';
import { RESTAPIService } from '../services/restapiservice.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent {
  taskCreateForm!: FormGroup;

  constructor(private service: RESTAPIService, private router: Router) {
    this.taskCreateForm = new FormGroup({
      title: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      status: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
      dueDate: new FormControl<string>('', [Validators.required, Validators.minLength(3)]),
    });
  }

  onSubmit() {
    if (this.taskCreateForm.valid) {
      let task: TaskNoId = new TaskNoId( this.taskCreateForm.value.title, this.taskCreateForm.value.description, this.taskCreateForm.value.status, this.taskCreateForm.value.dueDate);

      this.service.createTask(task).subscribe((data: any) => {
        this.router.navigate(['/tasks']);
      });
    }
  }

}
