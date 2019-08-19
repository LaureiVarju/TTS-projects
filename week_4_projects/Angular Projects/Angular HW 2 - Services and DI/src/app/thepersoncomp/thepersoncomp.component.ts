import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Person } from "../person";

@Component({
  selector: "app-thepersoncomp",
  templateUrl: "./thepersoncomp.component.html",
  styleUrls: ["./thepersoncomp.component.scss"]
})
export class ThepersoncompComponent implements OnInit {
  //a member variable is an instance variable of an obj. Sometimes called properties.
  // a variable in a class
  myperson: Person;

  constructor(private dataService: DataService) {}
  ngOnInit() {
    this.getPerson();
  }

  getPerson() {
    this.dataService.getPerson().subscribe(p => {
      console.log("Hey yo");
      this.myperson = p;
    });
  }
}
