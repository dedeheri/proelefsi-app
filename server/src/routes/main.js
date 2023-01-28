import express from "express";
const router = express.Router();

// contollers
import {
  topics,
  trending,
  searchTerm,
  detailArticle,
  forYou,
  getByTopics,
  report,
  notInterested,
  shortLink,
  searchResult,
  user,
  articleByUser,
  searchHistory,
  tags,
  response,
  visitor,
} from "../controllers/main/index.js";

// tags
router.get("/main/tags", tags);

// topics
router.get("/main/topics", topics);
router.get("/main/topics/:topics", getByTopics);

// search
router.get("/main/search/", searchResult);
router.post("/main/search/term", searchTerm);
router.get("/main/search/term/history", searchHistory);

// user
router.get("/main/user/:username", user);

// visitor
router.get("/main/visitor/create", visitor);

// article
router.get("/main/article/trending", trending);
router.post("/main/article/response", response);
router.get("/main/article/foryou", forYou);
router.post("/main/article/report", report);
router.post("/main/article/not-interested", notInterested);
router.get("/main/article/shortlink/:id", shortLink);
router.get("/main/article/:id", detailArticle);
router.get("/main/article/user/:username", articleByUser);

export default router;
