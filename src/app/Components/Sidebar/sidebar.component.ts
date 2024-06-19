import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
import { AuthService } from "../../Services/auth.service";
import { DataService } from "../../Services/data.service";

interface SidebarItem {
  label: string;
  path: string;
  icon?: string;
}

interface SidebarItems {
  [key: string]: SidebarItem[];
}

@Component({
  selector: "ns-sidebar",
  templateUrl: "./sidebar.component.html",
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class SidebarComponent {
  authService = inject(AuthService);
  router = inject(Router);
  currentUrl!: string;
  user: any = null;
  errorMessage: string | null = null;
  loading = false;

  sidebarItems: SidebarItems = {
    Data: [
      { label: "Users", path: "/users", icon: "person" },
      { label: "Collections", path: "/collections", icon: "folder" },
      { label: "Tokens", path: "/tokens", icon: "stars" },
      { label: "Posts", path: "/posts", icon: "post" },
    ],
    Contact: [
      {
        label: "Complaints",
        path: "/complaints",
        icon: "sentiment_dissatisfied",
      },
      { label: "Feedback", path: "/feedback", icon: "feedback" },
    ],
    Chart: [
      { label: "Stats", path: "/stats", icon: "monitoring" },
      { label: "Analytics", path: "/analytics", icon: "analytics" },
    ],
  };

  constructor(private dataService: DataService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit() {
    this.loading = true;
    this.dataService.getUser().subscribe({
      next: (data: any) => {
        this.user = data;
        this.errorMessage = null;
        this.loading = false;
      },
      error: (e: any) => {
        this.errorMessage = e.message;
        this.user = null;
        this.loading = false;
      },
    });
  }

  isActive(path: string): boolean {
    return this.currentUrl === path;
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    this.authService.currentUserSig.set(null);
    this.router.navigate(["/auth"]);
  }

  getKeys(obj: SidebarItems): string[] {
    return Object.keys(obj);
  }
}
