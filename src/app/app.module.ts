import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { ErroModule } from './core/erro/erro.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrosInterceptor } from './core/erro/erros.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ErroModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrosInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
