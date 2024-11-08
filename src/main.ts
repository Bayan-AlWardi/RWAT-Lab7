import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { TaskDetailsComponent } from './app/task-details/task-details.component';
import { HomeComponent } from './app/home/home.component';

const routes = [
  { path: '', component: HomeComponent }, // Route for home view (task list and add task)
  { path: 'task/:id', component: TaskDetailsComponent } // Route for task details with 'id' parameter
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
