import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit{
  cadastroForm!: FormGroup;

  @Input() perfilComponent = false;
  @Input() title = 'Crie seu cadastro';
  @Input()  textoBotao = 'CADASTRAR';
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>();
  @Output() sair: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormularioService
  ){}

  ngOnInit() {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, Validators.required],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      cidade: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, Validators.required],
      onfirmarEmail: [null, [Validators.required, Validators.email]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      aceitarTermos: [false, [Validators.requiredTrue]]
    })
  }

  executarAcao(){
    this.acaoClique.emit();
  }

  deslogar(){
    this.sair.emit()
  }

}
