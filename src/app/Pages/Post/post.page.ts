import { Component } from "@angular/core";
import { PostsComponent } from "../../Components/Posts/posts.component";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "ns-page",
  templateUrl: "./post.page.html",
  standalone: true,
  imports: [PostsComponent, MatIconModule],
})
export class PostPage {}
