import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ns-users",
  templateUrl: "./users.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class UsersComponent implements OnInit {
  users: any[] | null = null;
  errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.errorMessage = null;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.users = null;
      },
    });
  }
}
