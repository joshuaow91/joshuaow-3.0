import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleComponent } from './themeToggle/themeToggle.component';
import { FormsModule } from '@angular/forms';
import { WorkTfoComponent } from './work-tfo/work-tfo.component';
import { WorkStatComponent } from './work-stat/work-stat.component';
import { DocComponent } from './docwork/doc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WorkComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ToggleComponent,
    WorkTfoComponent,
    WorkStatComponent,
    DocComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
