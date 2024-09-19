import { Component } from "@angular/core";
import { FeedbacksComponent } from "../../Components/Feedbacks/feedbacks.component";

@Component({
  selector: "ns-feedback",
  templateUrl: "./feedback.page.html",
  standalone: true,
  imports: [FeedbacksComponent],
})
export class FeedbackPage {}
