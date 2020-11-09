import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if (this.auth.isAccessTokenInvalido()) {
        console.log('Navegação com access token inválido. Obtendo novo token...');
  
        return this.auth.obterNovoAccessToken()
          .then(() => {
            if (this.auth.isAccessTokenInvalido()) {
              this.router.navigate(['/login']);
              return false;
            }
  
            return true;
          });
      }



    return true;
  }
  
}
