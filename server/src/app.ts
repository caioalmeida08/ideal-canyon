import express from "express";
import scooterRouter from "./routers/scooterRouter";
import contactRouter from "./routers/contactRouter";
import addressRouter from "./routers/addressRouter";

export class App{
  public server: express.Application;

  constructor(){
    this.server = express();
    this.middleware();
    this.routers();
  }

  private middleware(){
    this.server.use(express.json());
    this.server.use(express.urlencoded({extended: true}));
  }

  private routers(){
    this.server.use("/scooter", scooterRouter);
    this.server.use("/contact", contactRouter);
    this.server.use("/address", addressRouter);
  }
}