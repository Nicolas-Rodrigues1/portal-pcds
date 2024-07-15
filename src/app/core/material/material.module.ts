import { NgModule } from "@angular/core";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatRadioModule } from "@angular/material/radio";
import { MatDividerModule } from "@angular/material/divider";
import { MatCheckboxModule } from "@angular/material/checkbox";


@NgModule({
    exports:[
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatDividerModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {}