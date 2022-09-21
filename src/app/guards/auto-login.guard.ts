import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canLoad(): boolean {
    const isAuthenticated = this.authService.loggedUser !== null;
    if (isAuthenticated) {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }
    return isAuthenticated;
  }
}
