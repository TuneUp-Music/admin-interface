import { Routes } from "@angular/router";
import { RootComponent } from "./Pages/root/root.component";

import { CollectionPage } from "./Pages/Collection/collection.component";
import { UserPage } from "./Pages/User/user.component";
import { TokenPage } from "./Pages/Token/token.component";

export const appRoutes: Routes = [
  { path: "", component: RootComponent, title: "Home Page" },
  {
    path: "collection",
    component: CollectionPage,
    title: "Collection Page",
  },
  { path: "user", component: UserPage, title: "User Page" },
  { path: "token", component: TokenPage, title: "Token Page" },
];
