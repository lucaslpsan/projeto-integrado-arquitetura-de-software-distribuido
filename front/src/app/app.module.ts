import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { HeaderComponent } from './components/template/header/header.component';
import { TemplateModule } from './components/template/template.module';
import { TermspageComponent } from './components/termspage/termspage.component';

import { HomeModule } from './components/homepage/home.module';

@NgModule({
  declarations: [AboutpageComponent, TermspageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TemplateModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [HeaderComponent],
})
export class AppModule {}
