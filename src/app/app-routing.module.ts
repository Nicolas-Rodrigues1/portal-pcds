import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./autenticacao/cadastro/cadastro.component";

const routes: Routes = [
    {
        path: '',
        component: CadastroComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule{}