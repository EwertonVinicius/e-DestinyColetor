import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/oauth/token';
  jwtPayload: any;
  tokensRevokeUrl = 'http://localhost:8080/tokens/revoke';

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService
    
    ) {
      this.carregarToken();
     }

  login(usuario: string, senha: string): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/x-www-form-urlencoded')
      .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = `client=angular&username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        console.log(response);
        this.armazenarToken(response['access_token']);
      })
      .catch(response => {
        if (response.status === 400) {
          if (response.error === 'invalid_grant') {
            return Promise.reject('Usuário ou senha inválida!');
          }
        }

        return Promise.reject(response);
        
      });
    }

    obterNovoAccessToken(): Promise<void> {
      const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
  
      const body = 'grant_type=refresh_token';
  
      return this.http.post(this.oauthTokenUrl, body,
          { headers, withCredentials: true })
        .toPromise()
        .then(response => {
          this.armazenarToken(response['access_token']);
  
          console.log('Novo access token criado!');
  
          return Promise.resolve(null);
        })
        .catch(response => {
          console.error('Erro ao renovar token.', response);
          return Promise.resolve(null);
        });
    }

    limparAccessToken() {
      localStorage.removeItem('token');
      this.jwtPayload = null;   
    }

    isAccessTokenInvalido() {
      const token = localStorage.getItem('token');
  
      return !token || this.jwtHelper.isTokenExpired(token);
    }
      private armazenarToken(token: string) {
        this.jwtPayload = this.jwtHelper.decodeToken(token);
        localStorage.setItem('token', token);
      }
      private carregarToken() {
        const token = localStorage.getItem('token');
    
        if (token) {
          this.armazenarToken(token);
        }
      }
      logout() {
        return this.http.delete(this.tokensRevokeUrl, { withCredentials: true })
          .toPromise()
          .then(() => {
            this.limparAccessToken();
          });
      }
}
