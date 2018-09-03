import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HornavComponent } from './hornav/hornav.component';
import { VernavComponent } from './vernav/vernav.component';
import { PagetopComponent } from './pagetop/pagetop.component';
import { PagebotComponent } from './pagebot/pagebot.component';
import { FeednavComponent } from './feednav/feednav.component';

@NgModule({
  declarations: [
    AppComponent,
    HornavComponent,
    VernavComponent,
    PagetopComponent,
    PagebotComponent,
    FeednavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
