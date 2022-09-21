import { AuthenticationService } from './../services/authentication.service';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(): boolean {
    const isAuthenticated = this.authService.loggedUser !== null;
    if (!isAuthenticated) {
      this.router.navigateByUrl('/login');
    }
    return isAuthenticated;
  }
}
