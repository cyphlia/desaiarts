export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-serif font-bold text-primary mb-8 text-center">About DesaiArts</h1>
      
      <div className="glassmorphism p-8 rounded-2xl border border-border">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl italic text-foreground/80 mb-6">
            DesaiArts aims to bring joy to your festival of Ganesh Chaturthi by our talent.
          </p>
          
          <p className="mb-4">
            Founded with a passion for preserving traditional art forms while embracing eco-friendly practices, DesaiArts has been crafting premium Makhars for years. Our mission is to make your Ganesh Chaturthi celebrations grand, memorable, and environmentally conscious.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Craftsmanship</h2>
          <p className="mb-4">
            Every Makhar at DesaiArts is handcrafted by skilled artisans who pour their devotion and expertise into every intricate detail. From majestic peacock themes to classic wooden temple designs, our collection reflects the rich cultural heritage of India.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Sustainability</h2>
          <p className="mb-4">
            We believe that devotion should not come at the cost of nature. That's why we focus on using sustainable, biodegradable, and recycled materials wherever possible, ensuring that your celebrations are completely eco-friendly.
          </p>
          
          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-xl text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Get in Touch</h3>
            <p>Have custom requirements or bulk orders?</p>
            <p className="font-medium mt-2">Email: contact@desaiarts.example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
