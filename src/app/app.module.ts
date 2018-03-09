import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartWindowComponent } from './home/start-window/start-window.component';
import { GameWindowComponent } from './home/game-window/game-window.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartWindowComponent,
    GameWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
