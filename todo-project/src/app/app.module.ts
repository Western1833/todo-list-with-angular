import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ResultContainerComponent } from './result-container/result-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    InputFieldComponent,
    ResultContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
