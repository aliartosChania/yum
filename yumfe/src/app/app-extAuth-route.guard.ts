import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';


@Injectable()
export class AppExtAuthRouteGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.getRemoteAuthMethod().map(
      value => {
        console.log("auth method:" + value);
        if (value === 'ldap') {
          this.router.navigate(['/']);
        } else {
          return true;
        }
      });
 
  }
}
