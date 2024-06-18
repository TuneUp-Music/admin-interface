import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ns-collections",
  templateUrl: "./collections.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class CollectionsComponent implements OnInit {
  collections: any[] | null = null;
  errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getCollections().subscribe({
      next: (data) => {
        this.collections = data;
        this.errorMessage = null;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.collections = null;
      },
    });
  }
}
