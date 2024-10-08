import { Routes } from "@angular/router";
import { CollectionPage } from "./Pages/Collection/collection.page";
import { UserPage } from "./Pages/User/user.page";
import { TokenPage } from "./Pages/Token/token.page";
import { PostPage } from "./Pages/Post/post.page";
import { AuthPage } from "./Pages/Auth/auth.page";
import { LayoutComponent } from "./Components/Layout/layout.component";
import { HomePage } from "./Pages/Home/home.page";
import { authGuard, loggedInGuard } from "./Services/auth.guard";
import { FeedbackPage } from "./Pages/Feedback/feedback.page";

export const appRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "", component: HomePage, title: "Home Page" },
      {
        path: "collections",
        component: CollectionPage,
        title: "Collection Page",
      },
      { path: "users", component: UserPage, title: "User Page" },
      { path: "tokens", component: TokenPage, title: "Token Page" },
      { path: "posts", component: PostPage, title: "Post Page" },
      { path: "feedback", component: FeedbackPage, title: "Feedbacks Page" },
    ],
    canActivateChild: [authGuard],
  },
  {
    path: "auth",
    component: AuthPage,
    title: "Auth Page",
    canActivate: [loggedInGuard],
  },
  // { path: "complaints", component: PostPage, title: "Post Page"},
  // { path: "feedback", component: FeedbackPage, title: "Feedbacks Page" },
  // { path: "stats", component: PostPage, title: "Post Page"},
  // { path: "analytics", component: PostPage, title: "Post Page"},
];
