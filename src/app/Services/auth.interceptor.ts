export const authInterceptor = (req: any, next: any) => {
  const token = localStorage.getItem("token") ?? "";
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(req);
};
