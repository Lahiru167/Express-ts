import { Router, Request, Response } from "express";

export class CustomerRoutes {
  private static instance: CustomerRoutes;
  public router: Router;
  public static getInstance(): CustomerRoutes {
    if (!CustomerRoutes.instance) {
      CustomerRoutes.instance = new CustomerRoutes();
    }
    return CustomerRoutes.instance;
  }

  private constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  private setupRoutes() {
    this.router.get("/", (req: Request, res: Response) => {
      res.send("hello world customer");
    });

    this.router.post("/", (req: Request, res: Response) => {
      const { name } = req.body;
      res.send(`Hello ${name}`);
    });
  }
}
