import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';
import { LogoutService } from '../seguranca/logout.service';
// import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {




  constructor(
    private router: Router,
    public auth: AuthService,
    private logoutService: LogoutService
  ){}
  // private toastyConfig: ToastyConfig,
  


  // ) { this.toastyConfig.theme = 'bootstrap'; }



  exibindoMenu = false;

  ngOnInit(): void {
  }
  logout() {
    this.logoutService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => console.log('erro'));

}

}