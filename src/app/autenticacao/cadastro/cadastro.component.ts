import { Component } from '@angular/core';
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  constructor(
    private formularioService: FormularioService
  ){}

  cadastrar(){
    const formCadastro = this.formularioService.getCadastro();
    console.log(formCadastro?.value)
  }

}
