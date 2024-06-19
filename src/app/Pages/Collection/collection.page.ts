import { Component, ViewEncapsulation } from "@angular/core";
import { CollectionsComponent } from "../../Components/Collections/collections.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "ns-collection",
  templateUrl: "./collection.page.html",
  standalone: true,
  imports: [CollectionsComponent, MatIconModule],
})
export class CollectionPage {}
