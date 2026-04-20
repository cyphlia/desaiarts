"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  availability: string;
  image: string;
  tags: string[];
};

export default function MakharsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Filtering state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("featured"); // featured, price-low, price-high
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Use relative URL so it works when deployed
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        
        // Extract unique tags
        const tags = new Set<string>();
        data.forEach((p: Product) => {
          p.tags.forEach(t => tags.add(t));
        });
        setAllTags(Array.from(tags));
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredAndSortedProducts = products
    .filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag === "All" || p.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return 0; // featured/default
    });

  if (loading) return (
    <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Our Makhars</h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Discover our collection of handcrafted, eco-friendly Makhars. Each piece is designed to bring elegance and devotion to your celebrations.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 glassmorphism p-4 rounded-xl border border-primary/20">
        <div className="w-full md:w-1/3">
          <input 
            type="text" 
            placeholder="Search makhars..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="flex w-full md:w-auto gap-4">
          <select 
            value={selectedTag} 
            onChange={(e) => setSelectedTag(e.target.value)}
            className="flex-1 md:flex-none p-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="All">All Categories</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 md:flex-none p-2 border border-border rounded bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-20 text-foreground/60">
          <p className="text-xl">No makhars found matching your criteria.</p>
          <button 
            onClick={() => {setSearchQuery(""); setSelectedTag("All");}}
            className="mt-4 text-primary hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="bg-card text-card-foreground border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              {product.image && (
                <div className="h-64 overflow-hidden bg-muted relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className={`absolute top-4 right-4 backdrop-blur px-3 py-1 rounded-full text-xs font-bold ${
                    product.availability === 'In Stock' ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'
                  }`}>
                    {product.availability}
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl font-serif text-primary leading-tight pr-4">{product.name}</h3>
                  <span className="font-bold text-lg whitespace-nowrap">₹{product.price}</span>
                </div>
                <p className="text-sm text-foreground/70 mb-6 line-clamp-3 h-16">{product.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-[11px] font-medium px-3 py-1 bg-secondary/10 text-secondary-foreground rounded-full border border-secondary/20">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-3 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
