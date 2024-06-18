import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ns-races",
  templateUrl: "./races.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class RacesComponent {
  // http.get<Array<RaceModel>>(`${baseUrl}/api/races`).subscribe((response: Array
  // 	<RaceModel>) => {
  // 	  console.log(response);
  // 	  // logs the array of races
  // 	});
}
