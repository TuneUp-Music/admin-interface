import { Component } from "@angular/core";
import { TopBarComponent } from "../../Components/top-bar/top-bar.component";
import { TokensComponent } from "../../Components/Tokens/tokens.component";

@Component({
  selector: "ns-token",
  templateUrl: "./token.component.html",
  standalone: true,
  imports: [TopBarComponent, TokensComponent],
})
export class TokenPage {}
