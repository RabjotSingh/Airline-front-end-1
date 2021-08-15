import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UservalidatordataService } from './uservalidatordata.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor( private router: Router,private data:UservalidatordataService) {}
  canActivate(): boolean {
    return this.data.getuservalidation();
  }
}
