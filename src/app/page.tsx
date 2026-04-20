import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative flex-grow flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-3xl"></div>
          <div className="absolute top-[60%] -left-[10%] w-[30%] h-[30%] rounded-full bg-primary/20 blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center z-10 py-20">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary dark:text-primary-foreground mb-6 tracking-tight drop-shadow-sm">
            DesaiArts
          </h1>
          <p className="text-xl md:text-3xl text-foreground/80 mb-8 font-light italic">
            "Bringing joy to your festival of Ganesh Chaturthi by our talent."
          </p>
          <div className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12">
            Explore our premium collection of handcrafted, eco-friendly Makhars designed to make your celebrations truly divine.
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/makhars"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Makhars
            </Link>
            <Link 
              href="/about"
              className="px-8 py-4 bg-card text-card-foreground border border-border rounded-full font-semibold hover:border-primary/50 hover:bg-primary/5 transition-all shadow-sm"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-2xl glassmorphism border-primary/20">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4 text-secondary text-2xl">🌱</div>
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-foreground/70">Crafted with sustainable materials to protect our environment.</p>
            </div>
            <div className="p-6 rounded-2xl glassmorphism border-primary/20">
              <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-4 text-primary text-2xl">✨</div>
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-foreground/70">Intricate designs and durable build for a grand celebration.</p>
            </div>
            <div className="p-6 rounded-2xl glassmorphism border-primary/20">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center mb-4 text-secondary text-2xl">🎨</div>
              <h3 className="text-xl font-bold mb-2">Handcrafted</h3>
              <p className="text-foreground/70">Every piece is uniquely created by our talented artisans.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
