import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "ns-spinner",
  templateUrl: "./spinner.component.html",
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class SpinnerComponent {}
