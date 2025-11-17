import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import routes from "./routes.mjs";
import { PORT } from "./config/app.mjs";
import errorHandler from "./middlewares/global_error_handler.mjs"
const app = express();

app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(json());
app.use(rateLimit({ windowMs: 60 * 1000, max: 60 }));

app.use("/api", routes);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Backend server running on port ${PORT}`)
);
