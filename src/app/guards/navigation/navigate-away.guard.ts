import { IUserConfirmation } from './../../interfaces/users/user-confirmation';
import { Injectable, Component } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigateAwayGuard implements CanDeactivate<IUserConfirmation> {
  canDeactivate(
    userConfirm: IUserConfirmation,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return userConfirm.confirm();
  }
  
}
