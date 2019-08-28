import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ThepersoncompComponent } from "./thepersoncomp/thepersoncomp.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";
import { AnimatepageComponent } from './animatepage/animatepage.component';
import { OpenCloseComponent } from './open-close/open-close.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ThepersoncompComponent,
    FormComponent,
    AnimatepageComponent,
    OpenCloseComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
