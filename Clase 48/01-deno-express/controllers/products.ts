import { v4 } from "../deps.ts";
import { Product } from "../types/types.ts";

let products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    price: 1,
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description 2",
    price: 2,
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description 3",
    price: 3,
  },
];

const getProducts = async (_request: any, response: any) => {
  await response.json(
    {
      error: false,
      data: products,
    },
  );
};

const getProduct = async (request: any, response: any) => {
  console.log(request.params);

  const product: Product | undefined = products.find(
    (p) => p.id === request.params.id,
  );

  if (product) {
    await response.json(
      {
        error: false,
        data: product,
      },
    );
  } else {
    response.status = 404;

    await response.json(
      {
        error: true,
        message: "Product not found",
      },
    );
  }
};

const addProduct = async (request: any, response: any) => {
  if (!request.data) {
    response.status = 400;
    response.json(
      {
        error: true,
        message: "No data provided",
      },
    );
  } else {
    const product: Product = await request.data;

    // ! Deprecado
    // product.id = v4.generate();
    product.id = globalThis.crypto.randomUUID();

    products.push(product);

    response.json(
      {
        error: false,
        data: product,
      },
    );
  }
};

const updateProduct = async (request: any, response: any) => {
  const idParam = await request.params.id;
  const data = await request.data;
  const product: Product | undefined = products.find(
    (p) => p.id === idParam,
  );

  if (product) {
    const updateData: {
      name?: string;
      description?: string;
      price?: number;
    } = data;

    products = products.map(
      (p) => (p.id === idParam ? { ...p, ...updateData } : p),
    );

    response.json(
      {
        error: false,
        data: products,
      },
    );
  } else {
    response.status = 400;
    response.json(
      {
        error: true,
        message: "No data",
      },
    );
  }
};

const deleteProduct = async (request: any, response: any) => {
  const idParam = await request.params.id;
  products = products.filter(
    (p) => p.id !== idParam,
  );

  response.json(
    {
      error: false,
      message: "Product deleted",
      data: products,
    },
  );
};

export { addProduct, deleteProduct, getProduct, getProducts, updateProduct };
