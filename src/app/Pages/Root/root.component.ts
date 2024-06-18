import { Component } from "@angular/core";
import { TopBarComponent } from "../../Components/top-bar/top-bar.component";

@Component({
  selector: "ns-onverra",
  templateUrl: "./root.component.html",
  standalone: true,
  imports: [TopBarComponent],
})
export class RootComponent {}
