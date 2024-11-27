import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaProdutosComponent } from './lista-produtos/lista-produtos.component';
import { CommonModule } from '@angular/common';
import { ConsumoComponent } from './consumo/consumo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ListaProdutosComponent, ConsumoComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
