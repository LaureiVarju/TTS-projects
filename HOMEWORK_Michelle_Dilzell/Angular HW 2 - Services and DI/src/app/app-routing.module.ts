import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ThepersoncompComponent } from "./thepersoncomp/thepersoncomp.component";
import { FormComponent } from "./form/form.component";
import { AnimatepageComponent } from "./animatepage/animatepage.component";
import { OpenCloseComponent } from "./open-close/open-close.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "thepersoncomp", component: ThepersoncompComponent },
  { path: "form", component: FormComponent },
  { path: "animatepage", component: AnimatepageComponent },
  { path: "open-close", component: OpenCloseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
