import express from "express";
import booksRouter from "./routes/book.routes.js";
import foodsRouter from "./routes/food.routes.js";

const server = express();
server.use(express.json());

const port = 3333;

server.use("/book", booksRouter);
server.use("/food", foodsRouter);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});
