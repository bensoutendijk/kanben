import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 2000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
