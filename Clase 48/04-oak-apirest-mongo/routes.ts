import { Router } from "./deps.ts";
import {
  addQuote,
  deleteQuote,
  getQuote,
  getQuotes,
  updateQuote,
} from "./controllers/quotes.ts";

const router = new Router();

router
  .get(
    "/api/quote",
    getQuotes,
  )
  .get(
    "/api/quote/:id",
    getQuote,
  )
  .post(
    "/api/quote",
    addQuote,
  )
  .put(
    "/api/quote/:id",
    updateQuote,
  )
  .delete(
    "/api/quote/:id",
    deleteQuote,
  );

export default router;
