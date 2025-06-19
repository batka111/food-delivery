import express from "express";
import booksRouter from "./routes/book.routes.js";
import foodsRouter from "./routes/food.routes.js";
import mongoose from "mongoose";
import foodsRouterCategory from "./routes/category.routes.js";
import userRouter from "./routes/auth.routes.js";
import ordersRouterCategory from "./routes/food-order.routes.js";

mongoose.connect(
  "mongodb+srv://batb9714:VfzylQqTaDhUziWq@cluster0.xtttvsm.mongodb.net/food-delivery"
);

const server = express();
server.use(express.json());

const port = 3303;

server.use("/book", booksRouter);
server.use("/food", foodsRouter);
server.use("/category", foodsRouterCategory);
server.use("/user", userRouter);
server.use("/order", ordersRouterCategory);

server.get("/", (_request, response) => {
  response.send("Hello Dashka");
});

server.listen(port, () => {
  console.log("Server aslaa");
});
