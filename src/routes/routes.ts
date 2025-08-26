import { Router } from "express";
import { GreetingRoutes } from "./greeting.routes";
import { CustomerRoutes } from "./customer.routes";

export class Routes {
  public router: Router;
  private static instance: Routes;

  public static getInstance(): Routes {
    if (!Routes.instance) {
      Routes.instance = new Routes();
    }
    return Routes.instance;
  }

  private constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  setupRoutes() {
    this.router.use("/greeting", GreetingRoutes.getInstance().router);
    this.router.use("/customer", CustomerRoutes.getInstance().router);
  }
}
