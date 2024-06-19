import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../../Components/Sidebar/sidebar.component";

@Component({
  selector: "ns-home",
  templateUrl: "./home.page.html",
  standalone: true,
  imports: [RouterModule, SidebarComponent],
})
export class HomePage {}
