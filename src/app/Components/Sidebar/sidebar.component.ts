import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";

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

  constructor() {}

  getKeys(obj: SidebarItems): string[] {
    return Object.keys(obj);
  }
}
