import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormBaseComponent } from './form-base/form-base.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
    declarations:[

    
    HeaderComponent,
           FooterComponent,
           FormBaseComponent,
           BannerComponent
  ],
    imports:[
        CommonModule
    ],
    exports:[

    ]
})

export class SharedModule{}