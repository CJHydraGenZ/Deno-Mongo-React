import { Router } from "../deps.ts";
import {
  getAllbooks,
  deleteOneBook,
  getOnebook,
  postOneBook,
  putOneBook,
} from "../Api/Books.ts";

export const router = new Router();
router
  .get("/books", getAllbooks)
  .get("/book/:id", getOnebook)
  .post("/book", postOneBook)
  .put("/book/:id", putOneBook)
  .delete("/book/:id", deleteOneBook);
