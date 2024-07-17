import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./autenticacao/cadastro/cadastro.component";
import { LoginComponent } from "./autenticacao/login/login.component";

const routes: Routes = [
    {
        path: '',
        component: CadastroComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}