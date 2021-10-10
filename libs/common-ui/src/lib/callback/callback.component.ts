import { AuthService } from '@capstone-project/core-data';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'capstone-project-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    const code = this.route.snapshot.queryParams.code;
    this.authService.handleRedirectCallback(code);
    this.router.navigateByUrl('/home');
  }

}
