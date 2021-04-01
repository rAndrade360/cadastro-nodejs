import { NextFunction, Request, Response } from "express";

export default function authenticationMiddleware(request: Request, response: Response, next: NextFunction) {
  if (request.isAuthenticated()) return next();
  return response.redirect('/login?fail=true');
}