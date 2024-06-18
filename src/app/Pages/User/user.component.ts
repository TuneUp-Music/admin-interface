import { Component } from "@angular/core";
import { TopBarComponent } from "../../Components/top-bar/top-bar.component";
import { UsersComponent } from "../../Components/Users/users.component";

@Component({
  selector: "ns-user",
  templateUrl: "./user.component.html",
  standalone: true,
  imports: [TopBarComponent, UsersComponent],
})
export class UserPage {
  constructor() {
    console.log("User Component");
  }
}
