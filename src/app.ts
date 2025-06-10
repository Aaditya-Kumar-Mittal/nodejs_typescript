import express, { Express, Request, Response } from "express";

const app: Express = express();
const port = 3000;

// Parsing json
app.use(express.json());

// Middleware -> Add Start Time Property To Request

// For adding custom properties need to add interface
interface CustomRequest extends Request {
  startTime?: number
}

app.use((req: CustomRequest, res: Response, next) => {
  req.startTime = Date.now();
  next();
});

// req -> Request<p, ResBody, ReqBody, ReqQuery, Locals>
// Route is /user/:id, then this route is p(type for route parameters) here
// ResBody = res.json / res.send
// res -> Response<ResBody, Locals>

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, I'm learning Express with TypeScript!");
});

// Post Roue -> new user -> name and email
// -> /user/:id -> Request<ParamsTypes {}, ResBody, ReqBody, ReqQuery (for searching and querying information), Locals>

interface User {
  name: string,
  email: string
}

app.post("/user", (req: Request<{}, {}, User>, res: Response) => {
  const { name, email } = req.body;
  res.json({ name, email, message: "User created successfully" });
});

// User based on Id
app.get("/user/:id", (req: Request<{ id: String }>, res: Response) => {
  const { id } = req.params;
  res.json({ id, message: "User found successfully" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
