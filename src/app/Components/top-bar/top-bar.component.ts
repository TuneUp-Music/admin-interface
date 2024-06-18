import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";

@Component({
  selector: "ns-top-bar",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./top-bar.component.html",
  styleUrl: "./top-bar.component.css",
})
export class TopBarComponent {
  constructor(private router: Router) {}

  redirectTo = (route: string, query: string | void): void => {
    this.router.navigate([route], { queryParams: { page: query } });
  };
}
