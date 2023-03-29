import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { ComponetComponent } from './componet/componet.component';
import { LoginModule } from './login/login.module';
import { EventComponent } from './event/event.component';
import { PropbindingComponent } from './propbinding/propbinding.component';
import { ConditionComponent } from './condition/condition.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ComponetComponent,
    EventComponent,
    PropbindingComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
