import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { Collection } from "../Models/collection.model";
import { User } from "../Models/user.model";
import { Post } from "../Models/post.model";
import { Token } from "../Models/token.model";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.apiUrl;

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error("An error occurred:", error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(
      () => new Error("Something bad happened; please try again later.")
    );
  }

  get<T>(endpoint: string): Observable<T> {
    return this.http
      .get<T>(`${this.baseUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  getCollections(): Observable<Collection[]> {
    return this.get<Collection[]>("collection/all");
  }

  getTokens(): Observable<Token[]> {
    return this.get<Token[]>("token/all");
  }

  getUsers(): Observable<User[]> {
    return this.get<User[]>("user/all");
  }

  getUser(): Observable<User> {
    return this.get<User>("admin");
  }

  getPosts(): Observable<Post[]> {
    return this.get<Post[]>("post/all");
  }

  login(form: FormGroup): Observable<any> {
    return this.http.post<any>(
      `${this.baseUrl}/auth/login?remember_me=true`,
      form.getRawValue()
    );
  }

  refreshToken(): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/auth/refresh`, {
        refresh_token: localStorage.getItem("refresh_token"),
      })
      .pipe(catchError(this.handleError));
  }
}
