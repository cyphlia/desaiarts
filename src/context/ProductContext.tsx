import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  seller: string;
  createdAt: string;
  featured: boolean;
}

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id' | 'createdAt'>) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  getProduct: (id: string) => Product | undefined;
  categories: string[];
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const defaultProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Ganpati Idol - Large',
    description: 'Beautiful handcrafted Ganpati idol made with eco-friendly materials. Perfect for home decoration during Ganesh Chaturthi.',
    price: 2500,
    images: ['https://images.pexels.com/photos/9324344/pexels-photo-9324344.jpeg'],
    category: 'Idols',
    seller: 'Sacred Arts',
    createdAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: '2',
    name: 'Decorative Marigold Garland',
    description: 'Fresh marigold garlands handmade with premium flowers. Adds vibrant colors to your Ganpati decoration.',
    price: 150,
    images: ['https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg'],
    category: 'Garlands',
    seller: 'Flower Paradise',
    createdAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: '3',
    name: 'Traditional Brass Diya Set',
    description: 'Set of 12 traditional brass diyas for creating a divine atmosphere during prayers and celebrations.',
    price: 800,
    images: ['https://images.pexels.com/photos/7207973/pexels-photo-7207973.jpeg'],
    category: 'Lighting',
    seller: 'Heritage Crafts',
    createdAt: new Date().toISOString(),
    featured: false,
  },
  {
    id: '4',
    name: 'Colorful Rangoli Powder Set',
    description: 'Vibrant rangoli powder set with 8 different colors. Perfect for creating beautiful patterns around your Ganpati.',
    price: 300,
    images: ['https://images.pexels.com/photos/8844906/pexels-photo-8844906.jpeg'],
    category: 'Rangoli',
    seller: 'Color Magic',
    createdAt: new Date().toISOString(),
    featured: true,
  },
];

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ganpati-products');
    return saved ? JSON.parse(saved) : defaultProducts;
  });

  useEffect(() => {
    localStorage.setItem('ganpati-products', JSON.stringify(products));
  }, [products]);

  const addProduct = (productData: Omit<Product, 'id' | 'createdAt'>) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setProducts(prev => [newProduct, ...prev]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(product => 
      product.id === id ? { ...product, ...updates } : product
    ));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const getProduct = (id: string) => {
    return products.find(product => product.id === id);
  };

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <ProductContext.Provider value={{
      products,
      addProduct,
      updateProduct,
      deleteProduct,
      getProduct,
      categories,
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};