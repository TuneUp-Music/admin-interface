import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { SpinnerComponent } from "../Spinner/spinner.component";
import { User } from "../../Models/user.model";

@Component({
  selector: "ns-users",
  templateUrl: "./users.component.html",
  standalone: true,
  imports: [CommonModule, AgGridAngular, SpinnerComponent],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  errorMessage: string | null = null;
  loading = false;
  colDefs: ColDef[] = [];
  themeClass = "ag-theme-quartz-dark";
  UserKeys = [
    "_id",
    "cgu",
    "creation_date",
    "email",
    "last_connection",
    "notification_token",
    "password",
    "preferences",
    "refresh",
    "role",
    "secret",
    "tags_table",
    "test",
    "token",
    "two_factor_auth_url",
    "two_factor_secret",
    "two_factor_verified",
    "username",
    "verified_email",
    "wallet",
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
    this.dataService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.errorMessage = null;
        this.loading = false;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.users = [];
        this.loading = false;
      },
    });
    this.generateColDefs();
  }

  generateColDefs(): void {
    this.colDefs = this.UserKeys.map((key, value) => ({
      checkboxSelection: key === "_id" ? true : false,
      field: key as string,
      headerName: this.formatHeaderName(key),
    }));
  }

  formatHeaderName(field: string): string {
    return field.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
  }
}
