import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AComponent } from './components/a/a.component';
import { BComponent } from './components/b/b.component';
import { AnimationBaseComponent } from './components/animation-base/animation-base.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LinkContainerComponent } from './components/link-container/link-container.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    AnimationBaseComponent,
    LinkContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
