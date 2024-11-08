import { Injectable } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

interface Task {
  name: string;
  specifications: string[];
}

@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private tasks: Task[] = [
    { name: 'Sample Task 1', specifications: [] },
    { name: 'Sample Task 2', specifications: [] }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(taskName: string) {
    const capitalizedTaskName = taskName
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    this.tasks.push({ name: capitalizedTaskName, specifications: [] });
  }
  

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  addSpecification(index: number, specification: string) {
    this.tasks[index].specifications.push(specification);
  }

  deleteSpecification(taskIndex: number, specIndex: number) {
    this.tasks[taskIndex].specifications.splice(specIndex, 1);
  }
}
