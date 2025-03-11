import express, {Request, Response, NextFunction} from "express";
import cors from "cors";
import morgan from "morgan"

const app = express();

// Middleware - från externa bibliotek och global använda
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Custom middleware

const myMiddleware1 = (req: Request, res: Response, next: NextFunction) => {
    console.log("Hi from middleware #1");
    // Logik eller loggning
    next();
}

const myMiddleware2 = (req: Request, res: Response, next: NextFunction) => {
  console.log("Hi from middleware #2");
  // Logik eller loggning
  next();
}


// Global användning av en custom middleware
// app.use(myMiddleware1);


app.get("/", (req, res) => {
  res.send("Node.js and Express.js with TypeScript");
});

app.get("/hello", myMiddleware1, myMiddleware2, (req, res) => {
  res.send("From hello route!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



