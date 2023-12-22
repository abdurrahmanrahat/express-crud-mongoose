import cors from "cors";
import express, { Application, Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.router";
const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/users", UserRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!!");
});

export default app;
