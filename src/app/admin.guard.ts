import { AdminvalidatordataService } from './adminvalidatordata.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor( private router: Router,private data:AdminvalidatordataService) {}
  canActivate(): boolean {
    return this.data.getadminvalidation();
  }
  
}
