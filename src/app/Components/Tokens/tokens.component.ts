import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";
import { Token } from "../../Models/token.model";
@Component({
  selector: "ns-tokens",
  templateUrl: "./tokens.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class TokensComponent implements OnInit {
  tokens: Token[] = [];
  errorMessage: string | null = null;
  loading = false;
  colDefs: ColDef[] = [];
  themeClass = "ag-theme-quartz-dark";
  TokenKeys = [
    "id",
    "title",
    "collection_id",
    "cover_picture_url",
    "badges",
    "creation_date",
    "history",
    "price",
    "rewards",
    "selling",
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
    this.dataService.getTokens().subscribe({
      next: (data) => {
        this.tokens = data;
        this.errorMessage = null;
        this.loading = false;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.tokens = [];
        this.loading = false;
      },
    });
    this.generateColDefs();
  }

  generateColDefs(): void {
    this.colDefs = this.TokenKeys.map((key, value) => ({
      checkboxSelection: key === "id" ? true : false,
      field: key as string,
      headerName: this.formatHeaderName(key),
    }));
  }

  formatHeaderName(field: string): string {
    return field.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  }
}
