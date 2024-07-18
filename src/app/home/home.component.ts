import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';
import { UserService } from '../autenticacao/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
    homeForm!: FormGroup;

  @Input() title = 'Monte seu pedido de venda'
  @Input() textoBotao = 'Realizar pedido'

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      placaMae: [null, [Validators.required]],
      processador: [null, [Validators.required]],
      memoriaRam: [null, [Validators.required]],
      armazenamento: [null, [Validators.required]],
      monitor: [null, [Validators.required]],
      teclado: [null, [Validators.required]],
      mouse: [null, [Validators.required]],
      
    })

    this.homeService.setHomeForm(this.homeForm);

  }

  realizarPedido(){
    console.log(this.homeForm.value)
  }

  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/login');
  }

}
