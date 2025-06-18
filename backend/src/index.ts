import express from "express";
import booksRouter from "./routes/book.routes.js";
import foodsRouter from "./routes/food.routes.js";
import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://batb9714:VfzylQqTaDhUziWq@cluster0.xtttvsm.mongodb.net/food-delivery"
);

const server = express();
server.use(express.json());

const port = 3333;

server.use("/book", booksRouter);
server.use("/buuz", foodsRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});
