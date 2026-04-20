export default function OtherPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-serif font-bold text-primary mb-6">Other Products</h1>
      <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
        Explore our range of festive accessories, decorative items, and more to complete your celebration setup.
      </p>
      
      <div className="glassmorphism p-12 rounded-2xl border border-border inline-block">
        <div className="text-6xl mb-4">✨</div>
        <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
        <p className="text-foreground/70">
          We are currently updating our inventory with new exciting products.<br/>Please check back later!
        </p>
      </div>
    </div>
  );
}
