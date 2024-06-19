import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChildFn,
} from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { DataService } from "./data.service";

export const authGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const dataService = inject(DataService);

  // const isLoggedIn = authService.currentUserSig()?.role === "ADMIN";
  const isLoggedIn = localStorage.getItem("token") != null;
  if (!isLoggedIn) {
    if (
      localStorage.getItem("token") == null &&
      localStorage.getItem("refresh_token") != null
    ) {
      dataService.refreshToken().subscribe({
        next: (data) => {
          localStorage.setItem("token", data.access_token);
          return true;
        },
        error: (e) => {
          console.error(e);
        },
      });
    }
    router.navigate(["/auth"]);
    return false;
  }
  return true;
};

export const loggedInGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // console.log(localStorage);
  // console.log(authService.currentUserSig());
  const isLoggedIn = localStorage.getItem("token") != null;
  if (isLoggedIn) {
    // if (authService.currentUserSig() === undefined) {
    // TODO
    // }
    router.navigate(["/"]);
    return false;
  }
  return true;
};
