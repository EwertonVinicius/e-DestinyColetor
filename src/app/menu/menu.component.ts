import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../seguranca/auth.service';

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
    
  ){}
  // private toastyConfig: ToastyConfig,
  


  // ) { this.toastyConfig.theme = 'bootstrap'; }



  exibindoMenu = false;

  ngOnInit(): void {
  }
  logout() {
    this.auth.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(erro => console.log(erro));
}

}