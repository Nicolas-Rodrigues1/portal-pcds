import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { BannerComponent } from './banner/banner.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
    declarations:[

    
    HeaderComponent,
           FooterComponent,
           HeaderComponent,
           FormBaseComponent,
           BannerComponent,
           ContainerComponent
  ],
    imports:[
        CommonModule
    ],
    exports:[
        FooterComponent,
        HeaderComponent,
        FormBaseComponent,
        BannerComponent,
        ContainerComponent
    ]
})

export class SharedModule{}