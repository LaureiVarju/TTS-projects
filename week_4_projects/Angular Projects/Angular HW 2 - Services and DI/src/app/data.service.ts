import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "./person";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DataService {
  delay(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(), ms));
  }

  person: Person = new Person("", "", 42);
  //the 'new' here is what makes Person an object.

  getPerson(): Observable<Person> {
    let persontest = of(this.person);
    this.delay(4000).then(any => {
      this.person.firstName = "John";
      this.person.lastName = "Park";
      this.person.Age = 43;
    });

    return persontest;
  }

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get("https://reqres.in/api/users");
  }
}
