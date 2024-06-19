import { Component } from "@angular/core";
import { UsersComponent } from "../../Components/Users/users.component";

@Component({
  selector: "ns-user",
  templateUrl: "./user.page.html",
  standalone: true,
  imports: [UsersComponent],
})
export class UserPage {}
