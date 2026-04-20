"use client";

import { useState, useEffect } from "react";

type Product = {
  id?: string;
  name: string;
  description: string;
  price: number | string;
  availability: string;
  image: string;
  tags: string[];
};

export default function AdminDashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<Product>({
    name: "",
    description: "",
    price: "",
    availability: "In Stock",
    image: "",
    tags: []
  });
  const [tagsInput, setTagsInput] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const productData = {
      ...formData,
      price: Number(formData.price),
      tags: tagsInput.split(",").map(t => t.trim()).filter(t => t)
    };

    try {
      if (editingId) {
        await fetch("/api/products", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...productData, id: editingId }),
        });
      } else {
        await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(productData),
        });
      }
      
      // Reset form
      setFormData({ name: "", description: "", price: "", availability: "In Stock", image: "", tags: [] });
      setTagsInput("");
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  const editProduct = (product: Product) => {
    setEditingId(product.id || null);
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      availability: product.availability,
      image: product.image,
      tags: product.tags
    });
    setTagsInput(product.tags.join(", "));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) return <div className="p-8 text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif font-bold text-primary mb-8 border-b pb-4">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-1 glassmorphism p-6 rounded-xl border border-border h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-6">{editingId ? "Edit Product" : "Add New Product"}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                required
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea 
                required
                name="description" 
                value={formData.description} 
                onChange={handleInputChange}
                className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary h-24"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Price (₹)</label>
                <input 
                  required
                  type="number" 
                  name="price" 
                  value={formData.price} 
                  onChange={handleInputChange}
                  className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Availability</label>
                <select 
                  name="availability" 
                  value={formData.availability} 
                  onChange={handleInputChange}
                  className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Pre-order">Pre-order</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input 
                type="text" 
                name="image" 
                value={formData.image} 
                onChange={handleInputChange}
                className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Tags (comma separated)</label>
              <input 
                type="text" 
                value={tagsInput} 
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full p-2 border border-border rounded bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Eco-friendly, Large, Wooden"
              />
            </div>
            
            <div className="flex gap-4 pt-4">
              <button 
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded font-medium hover:bg-primary/90 transition-colors"
              >
                {editingId ? "Update Product" : "Publish Product"}
              </button>
              {editingId && (
                <button 
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData({ name: "", description: "", price: "", availability: "In Stock", image: "", tags: [] });
                    setTagsInput("");
                  }}
                  className="bg-secondary text-secondary-foreground py-2 px-4 rounded font-medium hover:bg-secondary/90 transition-colors"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Product List Section */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6">Current Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-card text-card-foreground border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                {product.image && (
                  <div className="h-48 overflow-hidden bg-muted relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 right-2 bg-background/80 backdrop-blur px-2 py-1 rounded text-xs font-bold">
                      {product.availability}
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                    <span className="font-bold text-primary">₹{product.price}</span>
                  </div>
                  <p className="text-sm text-foreground/70 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {product.tags.map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-secondary/20 text-secondary-foreground rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={() => editProduct(product)}
                    className="w-full py-2 border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-medium"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
