import { Component } from "@angular/core";

import { Hero } from "../hero";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
  powers = ["Persistant", "Empathetic", "Observant", "Disciplined"];

  model = new Hero(18, "Owlette", this.powers[0], "Lily Muirhead");

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, "", "");
  }
}
