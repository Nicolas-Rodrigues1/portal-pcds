import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from './services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  homeForm!: FormGroup;

  @Input() title = 'Monte sua máquina'
  @Input() textoBotao = 'Realizar pedido'

  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService
  ){}

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      placaMae: [null, [Validators.required]],
      processador: [null, [Validators.required]],
      memoriaRam: [null, [Validators.required]],
      armazenamento: [null, [Validators.required]],
    })

    this.homeService.setHomeForm(this.homeForm);
  }

  realizarPedido(){
    console.log(this.homeForm.value)
  }

}
