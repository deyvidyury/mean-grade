import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BoletimComponent } from './components/boletim/boletim.component';

import { EstudanteService } from './services/estudante.service';
import { NotaService } from './services/nota.service';

@NgModule({
  declarations: [
    AppComponent,
    BoletimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [EstudanteService,NotaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
