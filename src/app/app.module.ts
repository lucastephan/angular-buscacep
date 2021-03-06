import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CepComponent } from './cep/cep.component';
import { CepService } from './cep/cep.service';

@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CepService],
  bootstrap: [AppComponent]
})
export class AppModule { }
