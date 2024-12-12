import { Component, Input } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task = { text: '', day: '', reminder: false };
}