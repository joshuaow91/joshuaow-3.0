import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ToggleComponent } from './themeToggle/themeToggle.component';
import { FormsModule } from '@angular/forms';
import { WorkComponent } from './projects/work-bo/work.component';
import { WorkTfoComponent } from './projects/work-tfo/work-tfo.component';
import { WorkStatComponent } from './projects/work-stat/work-stat.component';
import { DocComponent } from './projects/work-tfodocs/doc.component';
import { WorkSopfComponent } from './projects/work-sopf/work.sopf.component';
import { WorkRiseComponent } from './projects/work-rise/work-rise.component';


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
    WorkSopfComponent,
    WorkRiseComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
