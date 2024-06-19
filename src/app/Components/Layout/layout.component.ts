import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../Sidebar/sidebar.component";
@Component({
  selector: "ns-layout",
  templateUrl: "./layout.component.html",
  standalone: true,
  imports: [RouterModule, SidebarComponent],
})
export class LayoutComponent {}
