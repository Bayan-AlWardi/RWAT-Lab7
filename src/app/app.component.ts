import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, AddTaskComponent, TaskListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks = [{ name: 'Sample Task 1' }, { name: 'Sample Task 2' }];

  onTaskAdded(newTaskName: string) {
    this.tasks.push({ name: newTaskName });
  }

  onTaskDeleted(index: number) {
    this.tasks.splice(index, 1);
  }
}
