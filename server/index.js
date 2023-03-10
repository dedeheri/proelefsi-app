import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import i18next from "i18next";
import il8nextMiddleware from "i18next-http-middleware";
import il8nextBackend from "i18next-node-fs-backend";

// utils
import coonection from "./src/db/main.js";

// router
import {
  auth,
  home,
  article,
  users,
  topics,
  role,
  feedback,
  main,
} from "./src/routes/index.js";

// error handle
import errorsHandlers from "./src/errors/errorHandler.js";
import globalTime from "./src/middleware/globalTime.js";

dotenv.config();
const e = express();

// middleware
e.use(bodyParser.json());
e.use(
  cors({
    origin: true,
    credentials: true,
  })
);
e.use(cookieParser(process.env.COOKIE_SECRET));
e.use(helmet());

// database

coonection();

// static
const __dirname = path.resolve();
e.use("/assets/image/", express.static(path.join(__dirname, "/assets/image/")));

// i1next
i18next
  .use(il8nextBackend)
  .use(il8nextMiddleware.LanguageDetector)
  .init({
    fallbackNS: "common",
    fallbackLng: "en",
    backend: {
      loadPath: __dirname + "/assets/locales/{{lng}}/{{ns}}.json",
    },
    debug: false,
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"],
    },
    preload: ["en", "tr"],
    saveMissing: true,
  });

e.use(il8nextMiddleware.handle(i18next));

// endpoint
e.use("/api/v1", globalTime, auth);
e.use("/api/v1", globalTime, home);
e.use("/api/v1", globalTime, article);
e.use("/api/v1", globalTime, users);
e.use("/api/v1", globalTime, topics);
e.use("/api/v1", globalTime, role);
e.use("/api/v1", globalTime, feedback);
e.use("/api/v1", globalTime, main);

// handle endpoint error
e.use(errorsHandlers);

// listen
e.listen(process.env.PORT, () => {
  console.log(`Server is running ${process.env.PORT}`);
});
