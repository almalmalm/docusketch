import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconGeneratorComponent } from './components/icon-generator/icon-generator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [AppComponent, IconGeneratorComponent],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
