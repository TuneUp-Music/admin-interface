import { Injectable, signal } from "@angular/core";

interface User {
  id: number;
  email: string;
  username: string;
  role: string;
}

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}
  currentUserSig = signal<User | undefined | null>(undefined);
}
