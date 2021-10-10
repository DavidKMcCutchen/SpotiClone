import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'capstone-project-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Output() toggleSidenav = new EventEmitter();
}