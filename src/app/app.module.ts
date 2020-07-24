import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AppComponent } from './core/app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
