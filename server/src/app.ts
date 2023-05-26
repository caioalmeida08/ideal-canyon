import express from "express";
import scooterRouter from "./routers/scooterRouter";
import contactRouter from "./routers/contactRouter";
import addressRouter from "./routers/addressRouter";
import userRouter from "./routers/userRouter";
import orderRouter from "./routers/orderRouter";

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
    this.server.use(express.static(__dirname + "/public"));
  }

  private routers(){
    this.server.use("/scooter", scooterRouter);
    this.server.use("/contact", contactRouter);
    this.server.use("/address", addressRouter);
    this.server.use("/user", userRouter);
    this.server.use("/order", orderRouter);
  }
}