import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../classes/task';
import { RESTAPIService } from '../services/restapiservice.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent {
  taskEditForm!: FormGroup;
  currUrl: string = '';

  task!: Task;
  taskId!: number;



  constructor(private router: Router, private service: RESTAPIService) { 
    this.taskEditForm = new FormGroup({
      title: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      status: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
      dueDate: new FormControl <string> ('', [Validators.required, Validators.minLength(3)]),
    });

    this.grabTask();

  }

  grabTask() {
    // get the task id from the url
    this.taskId = parseInt(this.router.url.split('/')[3]);

    // get the task from the database
    this.service.getTask(this.taskId).subscribe((data: any) => {
      // create a new task object
      this.task = new Task(data.id, data.title, data.description, data.status, data.dueDate);

      // set the form values to the task values
      this.taskEditForm.patchValue({
        title: this.task.title,
        description: this.task.description,
        status: this.task.status,
        dueDate: new Date(this.task.dueDate)
      });

    });
  }

  onSubmit() {
    if (this.taskEditForm.valid) {
      const newDate = new Date(this.taskEditForm.value.dueDate).toLocaleDateString();

      // create a new task object
      let task: Task = new Task(this.taskId, this.taskEditForm.value.title, this.taskEditForm.value.description, this.taskEditForm.value.status, newDate);

      // update the task in the database
      this.service.updateTask(task).subscribe((data: any) => {
        console.log(data);
        // navigate to the task page
        this.router.navigate(['/tasks']);
      });
    }
  }

  deleteTask() {
    // delete the task from the database
    this.service.deleteTask(this.taskId).subscribe((data: any) => {console.log(data)});

    // navigate to the task page
    this.router.navigate(['/tasks']);
  }

  back() {
    // navigate to the task page
    this.router.navigate(['/tasks']);
  }
}
