import { expressive } from "./deps.ts";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from "./controllers/products.ts";

const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.bodyParser.json());

app.get(
  "/api/products",
  getProducts,
);

app.get(
  "/api/products/{id}",
  getProduct,
);

app.post(
  "/api/products",
  addProduct,
);

app.put(
  "/api/products/{id}",
  updateProduct,
);

app.delete(
  "/api/products/{id}",
  deleteProduct,
);

const PORT = 8080;

await app.listen(PORT);

console.log(`Server listening on port ${PORT}`);
