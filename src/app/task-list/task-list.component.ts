import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { CapitalizePipe } from '../capitalize.pipe'; 

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule,  CapitalizePipe], 
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: { name: string }[] = [];
  @Output() taskDeleted = new EventEmitter<number>();

  deleteTask(index: number) {
    this.taskDeleted.emit(index);
  }
}
