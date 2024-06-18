import { Component } from "@angular/core";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { RouterModule } from "@angular/router";
import { SidebarComponent } from "../Sidebar/sidebar.component";
@Component({
  selector: "ns-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [TopBarComponent, RouterModule, SidebarComponent],
})
export class AppComponent {}
