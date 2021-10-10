import { Component, OnInit } from '@angular/core';
import { AuthService } from '@capstone-project/core-data';

@Component({
  selector: 'capstone-project-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login();
  };

}
