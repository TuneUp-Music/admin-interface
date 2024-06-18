import { Component } from "@angular/core";
import { CollectionsComponent } from "../../Components/Collections/collections.component";
import { TopBarComponent } from "../../Components/top-bar/top-bar.component";

@Component({
  selector: "ns-collection",
  templateUrl: "./collection.component.html",
  standalone: true,
  imports: [CollectionsComponent, TopBarComponent],
})
export class CollectionPage {}
