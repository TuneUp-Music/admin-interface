import { Routes } from "@angular/router";
import { RootComponent } from "./Pages/Root/root.component";

import { CollectionPage } from "./Pages/Collection/collection.component";
import { UserPage } from "./Pages/User/user.component";
import { TokenPage } from "./Pages/Token/token.component";

export const appRoutes: Routes = [
  { path: "", component: RootComponent, title: "Home Page" },
  {
    path: "collections",
    component: CollectionPage,
    title: "Collection Page",
  },
  { path: "users", component: UserPage, title: "User Page" },
  { path: "tokens", component: TokenPage, title: "Token Page" },
];
