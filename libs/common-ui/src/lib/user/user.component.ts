import { TranslateModule } from '@ngx-translate/core';
import { UserAPI } from '@capstone-project/api-interfaces';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@capstone-project/core-data';
import { ActivatedRoute } from '@angular/router';
import { PipesModule } from '@capstone-project/pipes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId: string = '';
  user: UserAPI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getActivatedRoute();
    this.getUser();
  };

  getActivatedRoute(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.userId = params.id;
      console.log('Activated Route Id', params.id)
    });
  };

  getUser(): void {
    this.userService.getUserProfile().subscribe((user: UserAPI) => {
      this.user = user;
      console.log('User Data:', user);
    }, (err) => {
      console.log('User Error:', err);
      console.error(err.message);
    }, () => {
      console.log('User Complete')
    });
  }
};

