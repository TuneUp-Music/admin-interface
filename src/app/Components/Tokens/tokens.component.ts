import { Component, OnInit } from "@angular/core";
import { DataService } from "../../Services/data.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: "ns-tokens",
  templateUrl: "./tokens.component.html",
  standalone: true,
  imports: [CommonModule],
})
export class TokensComponent implements OnInit {
  tokens: any[] | null = null;
  errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTokens().subscribe({
      next: (data) => {
        this.tokens = data;
        this.errorMessage = null;
      },
      error: (e) => {
        this.errorMessage = e.message;
        this.tokens = null;
      },
    });
  }
}
