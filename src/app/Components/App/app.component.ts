import { Component } from "@angular/core";
import { TopBarComponent } from "../top-bar/top-bar.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "../../app.routes";

@Component({
  selector: "ns-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [TopBarComponent, RouterModule],
})
export class AppComponent {}
