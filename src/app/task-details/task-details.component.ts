import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { CapitalizePipe } from '../capitalize.pipe'; 

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule, CommonModule, CapitalizePipe], 
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: { name: string; specifications: string[] } | undefined;
  newSpecification: string = '';
  taskId: number = -1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.taskId = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTasks()[this.taskId];
    console.log('Loaded Task:', this.task); 
  }

  addSpecification() {
    if (this.newSpecification.trim() && this.taskId >= 0) {
      this.taskService.addSpecification(this.taskId, this.newSpecification.trim());
      console.log('Added Specification:', this.newSpecification); 
      this.newSpecification = ''; 
    }
  }

  deleteSpecification(specIndex: number) {
    if (this.taskId >= 0) {
      this.taskService.deleteSpecification(this.taskId, specIndex);
      console.log('Deleted Specification at index:', specIndex); 
    }
  }

  goBack() {
    this.router.navigate(['']);
  }
}
