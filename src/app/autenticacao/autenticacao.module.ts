import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations:[
        CadastroComponent,
        LoginComponent
  ],
    imports:[
        CommonModule,
        SharedModule
    ],
    exports:[
        CadastroComponent,
        LoginComponent
    ]
})

export class AutenticacaoModule{}