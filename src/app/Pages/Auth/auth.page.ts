import { Component, inject, Injectable } from "@angular/core";
import { ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { environment } from "../../../environments/environment";
import { Router } from "@angular/router";
import { DataService } from "../../Services/data.service";
import { AuthService } from "../../Services/auth.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: "ns-auth",
  templateUrl: "./auth.page.html",
  standalone: true,
  imports: [ReactiveFormsModule],
})
@Injectable({
  providedIn: "root",
})
export class AuthPage {
  constructor(
    private dataService: DataService,
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) {}

  private baseUrl = environment.apiUrl;
  fb = inject(FormBuilder);

  form = this.fb.nonNullable.group({
    login: ["", Validators.required],
    password: ["", Validators.required],
  });

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(): void {
    this.dataService.login(this.form).subscribe({
      next: (data) => {
        if (data.account.role !== "ADMIN") {
          this.form.reset();
          this.openSnackBar("You are not an admin", "Close");
        } else {
          localStorage.setItem("token", data.access_token);
          localStorage.setItem("refresh_token", data.refresh_token);
          this.authService.currentUserSig.set(data.account);
          this.router.navigate(["/"]);
        }
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
