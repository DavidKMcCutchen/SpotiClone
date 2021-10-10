import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'capstone-project-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.scss']
})
export class WildComponent {

  constructor(private router: Router) {}

  redirectTo() {
    this.router.navigate(['/home']);
  }
}
