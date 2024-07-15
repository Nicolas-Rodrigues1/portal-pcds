import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { HomeRoutingModule } from "./home-routing.module";
import { MaterialModule } from "../core/material/material.module";

@NgModule({
    declarations:[
        HomeComponent
    ],
    imports:[
        CommonModule,
        SharedModule,
        HomeRoutingModule,
        MaterialModule
    ],
    exports:[
        HomeComponent
    ]
})

export class HomeModule{}