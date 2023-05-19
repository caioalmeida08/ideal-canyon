import express from "express";
import scooterRouter from "./routers/scooterRouter";

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.scooterRouter();
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(express.urlencoded({extended: true}));
  }

  private scooterRouter(){
    this.server.use("/scooter", scooterRouter);
  }
}