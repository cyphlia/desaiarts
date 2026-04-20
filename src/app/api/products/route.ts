import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), "data", "products.json");

// Helper to ensure data directory exists
async function ensureDataFileExists() {
  try {
    await fs.access(dataFilePath);
  } catch (error) {
    // If file doesn't exist, create it with empty array
    await fs.mkdir(path.join(process.cwd(), "data"), { recursive: true });
    await fs.writeFile(dataFilePath, JSON.stringify([]));
  }
}

export async function GET() {
  try {
    await ensureDataFileExists();
    const data = await fs.readFile(dataFilePath, "utf8");
    const products = JSON.parse(data);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    await ensureDataFileExists();
    const data = await fs.readFile(dataFilePath, "utf8");
    const products = JSON.parse(data);
    
    const newProduct = await request.json();
    
    // Simple ID generation
    newProduct.id = Date.now().toString();
    
    products.push(newProduct);
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await ensureDataFileExists();
    const data = await fs.readFile(dataFilePath, "utf8");
    let products = JSON.parse(data);
    
    const updatedProduct = await request.json();
    
    if (!updatedProduct.id) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const index = products.findIndex((p: any) => p.id === updatedProduct.id);
    if (index === -1) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    products[index] = { ...products[index], ...updatedProduct };
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));
    
    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
  }
}
