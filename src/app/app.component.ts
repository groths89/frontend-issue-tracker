import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '@app/models/user';
import { AuthenticationService } from '@app/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser!: User;
  loading = false;
  title = 'issue-track-ui';

  constructor(private router: Router, private authenticationService: AuthenticationService) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
   }

   logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
