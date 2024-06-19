import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../../Components/Sidebar/sidebar.component";
import { AuthService } from "../../Services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ns-home",
  templateUrl: "./home.page.html",
  standalone: true,
  imports: [RouterModule, SidebarComponent, CommonModule],
})
export class HomePage {
  constructor() {}
  authService = inject(AuthService);
  router = inject(RouterModule);
}
