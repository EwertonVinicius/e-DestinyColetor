
import { Component  } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent  {

  salvar(form: NgForm) {
    console.log(form);

    // form.reset();
  }


}
