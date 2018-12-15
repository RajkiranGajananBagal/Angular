import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SecondCompComponent } from './second-comp/second-comp.component';
import { ThirdCompComponent } from './third-comp/third-comp.component';
import { FourthCompComponent } from './fourth-comp/fourth-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondCompComponent,
    ThirdCompComponent,
    FourthCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,SecondCompComponent]
})
export class AppModule { }
