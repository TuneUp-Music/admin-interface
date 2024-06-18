import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RouterModule } from "@angular/router";

interface SidebarItem {
  label: string;
  path: string;
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
      { label: "Users", path: "/users" },
      { label: "Collections", path: "/collections" },
      { label: "Tokens", path: "/tokens" },
    ],
    Contact: [
      { label: "Complaints", path: "/complaints" },
      { label: "Feedback", path: "/feedback" },
    ],
    Chart: [
      { label: "Stats", path: "/stats" },
      { label: "Graphs", path: "/graphs" },
    ],
  };

  constructor() {}

  getKeys(obj: SidebarItems): string[] {
    return Object.keys(obj);
  }
}
