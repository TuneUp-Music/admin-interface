import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";
import { Collection } from "../../Models/collection.model";

@Component({
  selector: "ns-collections",
  templateUrl: "./collections.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class CollectionsComponent implements OnInit {
  collections: Collection[] = [];
  errorMessage: string | null = null;
  loading = false;
  colDefs: ColDef[] = [];
  themeClass = "ag-theme-quartz-dark";

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
    // "history",
    // "rewards",
  ];

  defaultColDef = {
    // flex: 1,
    // editable: true,
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loading = true;
    this.dataService.getCollections().subscribe({
      next: (data) => {
        this.collections = data;
        this.errorMessage = null;
        this.loading = false;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.collections = [];
        this.loading = false;
      },
    });
    this.generateColDefs();
  }

  generateColDefs(): void {
    this.colDefs = this.CollectionKeys.map((key, value) => ({
      checkboxSelection: key === "id" ? true : false,
      field: key as string,
      headerName: this.formatHeaderName(key),
    }));
  }

  formatHeaderName(field: string): string {
    return field.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  }
}
