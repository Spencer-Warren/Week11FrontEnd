import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  constructor() { }
  fakeTasks = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description 1',
      status: 'Done',
      dueDate: '2021-05-01'
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description 2',
      status: 'In Progress',
      dueDate: '2021-05-02'
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description 3',
      status: 'In Progress',
      dueDate: '2021-05-03'
    },
    {
      id: 4,
      title: 'Task 4',
      description: 'Description 4',
      status: 'In Progress',
      dueDate: '2021-05-04'
    }
  ];
}
