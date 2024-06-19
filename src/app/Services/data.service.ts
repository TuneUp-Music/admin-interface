import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { Collection } from "../Models/collection.model";
import { User } from "../Models/user.model";
import { Post } from "../Models/post.model";
import { Token } from "../Models/token.model";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}
  private baseUrl = environment.apiUrl;

  // Generic GET method
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
    // console.log(`fetching data from ${this.baseUrl}/${endpoint}`);
    return this.http
      .get<T>(`${this.baseUrl}/${endpoint}`)
      .pipe(catchError(this.handleError));
  }

  // // You can add more specific methods as needed
  // getUsers(): Observable<any> {
  //   return this.get<any>("collections/all");
  // }

  getCollections(): Observable<any> {
    return this.get<Collection[]>("collection/all");
  }

  getTokens(): Observable<any> {
    return this.get<Token[]>("token/all");
  }

  getUsers(): Observable<any> {
    return this.get<User[]>("user/all");
  }

  getPosts(): Observable<any> {
    return this.get<Post[]>("post/all");
  }
  // // Method to fetch data by ID
  // getItemById<T>(endpoint: string, id: number): Observable<T> {
  //   return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`);
  // }
}
