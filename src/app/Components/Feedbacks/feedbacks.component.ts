import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";
import { Feedback } from "../../Models/feedback.model";
@Component({
  selector: "ns-feedbacks",
  templateUrl: "./feedbacks.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class FeedbacksComponent implements OnInit {
  feedbacks: Feedback[] = [];
  errorMessage: string | null = null;
  loading = false;
  colDefs: ColDef[] = [];
  themeClass = "ag-theme-quartz-dark";
  TokenKeys = [
    "_id",
    "feedbacks.UI",
    "feedbacks.UX",
    "feedbacks.BUGS",
    "feedbacks.RECOMMEND",
    "author",
    "role",
    "date",
    "status",
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
    this.dataService.getFeedbacks().subscribe({
      next: (data) => {
        this.feedbacks = data;
        this.errorMessage = null;
        this.loading = false;
        console.log(this.feedbacks);
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.feedbacks = [];
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
