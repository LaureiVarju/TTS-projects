import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";

@Component({
  selector: "app-hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent implements OnInit {
  //On the form guide, implements oninit isn't present, Same with the import. no oninit

  powers = ["Really Smart", "Super Flexible", "Laser Eyes", "Weather Changer"];

  model = new Hero(18, "Dr IQ", this.powers[0], "Chuck Overstreet");
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }

  //TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  constructor() {}

  ngOnInit() {}
}
