import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: Object;

  constructor(private data: DataService) {}

  /*the ngoninit function down here (upon initialization) is the function that is a 
    lifecycle hook for Angular. Any code in here will run when the component is loaded.*/
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }
  /* what this is doing is fetching/monitoring the data (subscribing) and then
  casting that data to "this.users" or "data" and then reporting it out to the console.log */
}
