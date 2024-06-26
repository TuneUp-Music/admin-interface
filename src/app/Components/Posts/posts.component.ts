import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";
import { Post } from "../../Models/post.model";

@Component({
  selector: "ns-posts",
  templateUrl: "./posts.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  errorMessage: string | null = null;
  loading = false;
  colDefs: ColDef[] = [];
  themeClass = "ag-theme-quartz-dark";

  PostKeys = [
    "_id",
    "title",
    "content",
    "publication_date",
    "link",
    "media",
    "views",
    "likes",
    "author",
    "tags",
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
    this.dataService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;
        this.errorMessage = null;
        this.loading = false;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.posts = [];
        this.loading = false;
      },
    });
    this.generateColDefs();
  }

  generateColDefs(): void {
    this.colDefs = this.PostKeys.map((key, value) => ({
      checkboxSelection: key === "_id" ? true : false,
      field: key as string,
      headerName: this.formatHeaderName(key),
    }));
  }

  formatHeaderName(field: string): string {
    return field.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  }
}
