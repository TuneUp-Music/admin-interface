import { Component } from "@angular/core";
import { TokensComponent } from "../../Components/Tokens/tokens.component";

@Component({
  selector: "ns-token",
  templateUrl: "./token.page.html",
  standalone: true,
  imports: [TokensComponent],
})
export class TokenPage {}
