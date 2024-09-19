import express from "express";
import blogRouter from "./routes/blogRouter.js";
import userRouter from "./routes/userRouter.js";
import shopRouter from "./routes/shopRouter.js";
const app = express();
//db connection


app.use(express.json());

app.use("/blog", blogRouter);
app.use("/users", userRouter);
app.use('/shop', shopRouter);

export default app;
