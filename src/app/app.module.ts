import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularComponent } from './techstack/angular/angular.component';
import { ReactComponent } from './techstack/react/react.component';
import { TsComponent } from './techstack/ts/ts.component';
import { JsComponent } from './techstack/js/js.component';
import { NodeComponent } from './techstack/node/node.component';
import { TailwindComponent } from './techstack/tailwind/tailwind.component';
import { WorkComponent } from './work/work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AngularComponent,
    ReactComponent,
    TsComponent,
    JsComponent,
    NodeComponent,
    TailwindComponent,
    WorkComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
