# Task Manager

This is a Task Manager application built with Angular, deployed to GitHub Pages. It allows users to manage a list of tasks, view task details, add specifications, and more.

## Features

1. **Add Task**: Users can enter a task name in the input field and add it to the task list.
2. **Task List Display**: The home page displays a list of all tasks. Each task name is capitalized automatically.
3. **Task Details**:
   - Clicking on a task redirects the user to a details page where they can view the task name.
   - Users can add multiple specifications for each task.
   - Specifications are displayed as a list below the task details.
   - Each specification has an option to delete it.
4. **Navigation**:
   - The app has routing enabled, allowing seamless navigation between the task list and task details pages.
   - There is a "Back to Home" button on the details page to return to the task list.
5. **Custom Pipe**: A custom pipe (`CapitalizePipe`) was created to automatically capitalize task names in the list.
6. **Styling**:
   - The app includes a gradient background and custom styles for buttons and elements to enhance the user experience.
   - The delete button for tasks and specifications is styled in red to indicate its functionality.
7. **Deployment to GitHub Pages**:
   - The application is configured for static deployment on GitHub Pages.
   - The `baseHref` is set correctly to allow routing to work on GitHub Pages.

## Project Structure

- **Components**:
  - `AppComponent`: The main component of the application.
  - `TaskListComponent`: Displays the list of tasks and allows task navigation.
  - `TaskDetailsComponent`: Shows details of a selected task and allows managing specifications.
  - `AddTaskComponent`: Provides input for adding new tasks.
- **Services**:
  - `TaskService`: Manages task data, including tasks and their specifications.

## Angular Features Used

### 1. Components
   - **AppComponent**: The root component that initializes the application.
   - **TaskListComponent**: Displays the list of tasks and allows navigation to task details.
   - **TaskDetailsComponent**: Displays details for a selected task and allows the user to add, view, and delete specifications.
   - **AddTaskComponent**: A reusable component for adding new tasks to the task list.

### 2. Templates
   - Each component has its own template file (HTML) that defines the structure and appearance of the component. For example, `TaskListComponent` has a template that displays each task in the list with a clickable link, and `TaskDetailsComponent` displays task specifications in a styled list.
   - **Gradient Background**: CSS and styling have been applied to provide a visually appealing user experience.

### 3. Data Binding
   - **One-Way Data Binding**: Used to display the task name and specifications dynamically based on user input.
   - **Two-Way Data Binding**: The input field for adding new specifications in `TaskDetailsComponent` uses two-way data binding to update the component's model as the user types.

### 4. Directives
   - **ngFor**: Used to loop through the tasks and specifications, displaying each item in a list.
   - **ngIf**: Used to conditionally display certain elements, such as showing the specifications list only if there are specifications added.

### 5. Forms
   - **Template-Driven Forms**: The application uses template-driven forms for adding new tasks and specifications. Angular’s `FormsModule` enables features like `ngModel` for two-way binding.
   - **Add Task Form**: Allows users to input a task name and add it to the task list.
   - **Add Specification Form**: Allows users to add specifications to a selected task.

### 6. Routing
   - **RouterModule**: Configured to enable navigation between the task list and task details views.
   - **Routing Paths**: The home page (task list) is accessible at the root path (`/`), and each task’s details page is accessible at `/task/:id`.
   - **Back to Home Button**: Provides a way to navigate back to the task list from the task details page.

### 7. Pipes
   - **Custom Capitalize Pipe**: A custom pipe was created to capitalize the first letter of each task name. This pipe is used in `TaskListComponent` to format the task names for better readability.

## Links

- **GitHub Repository**: [RWAT-Lab7 Repository](https://github.com/Bayan-AlWardi/RWAT-Lab7)
- **GitHub Pages (Live Site)**: [Task Manager on GitHub Pages](https://bayan-alwardi.github.io/RWAT-Lab7/)

## Conclusion

This project demonstrates key Angular features such as Components, Templates, Data Binding, Directives, Forms, Routing, and Pipes, making it a comprehensive example of Angular capabilities in building interactive applications.


