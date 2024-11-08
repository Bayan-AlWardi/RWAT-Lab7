import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { TaskListComponent } from '../task-list/task-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tasks: { name: string }[] = []; // Define the type for the tasks array

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(taskName: string) {
    this.taskService.addTask(taskName);
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }

  onTaskDeleted(index: number) {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks(); // Refresh the task list
  }
}
