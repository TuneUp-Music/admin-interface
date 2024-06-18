import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";

@Component({
  selector: "ns-collections",
  templateUrl: "./collections.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class CollectionsComponent implements OnInit {
  collections: any[] | null = null;
  errorMessage: string | null = null;
  CollectionKeys = [
    "id",
    "title",
    "description",
    "status",
    "banner",
    "creation_date",
    "publication_date",
    "remaining_tokens",
    "token_quantity",
    "floor_price",
    "image_url",
    "tags",
    "history",
    "rewards",
  ];
  colDefs: ColDef[] = [
    { field: "id" },
    { field: "title" },
    { field: "description" },
    { field: "status" },
    { field: "remaining_tokens" },
  ];

  constructor(private dataService: DataService) {}

  themeClass = "ag-theme-quartz-dark";

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
    this.generateColDefs();
  }

  generateColDefs(): void {
    this.colDefs = this.CollectionKeys.map((key, value) => ({
      field: key as string,
      headerName: this.formatHeaderName(key),
    }));
  }

  formatHeaderName(field: string): string {
    return field.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  }
}
