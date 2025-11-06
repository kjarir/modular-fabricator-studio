import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { initialProducts } from "@/data/products";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

export default function Home() {
  const featuredProducts = initialProducts.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial precision manufacturing"
            className="w-full h-full object-cover scale-105 animate-[scale-in_1.5s_ease-out]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        </div>
        
        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
              Precision Engineered
              <span className="block text-primary mt-2">Instrument Fittings</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Industry-leading manufacturer of high-quality compression tube fittings
              and instrumentation solutions for demanding applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 animate-fade-in-up">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Leak-Proof Quality</h3>
              <p className="text-muted-foreground">
                Double ferrule compression design ensures zero-leak performance
                up to 10,000 PSI.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Rapid Installation</h3>
              <p className="text-muted-foreground">
                Torque-free design allows quick, reliable installation without
                specialized tools.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center space-y-4 p-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Industry Standard</h3>
              <p className="text-muted-foreground">
                Fully compliant with international standards and specifications
                for critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Featured Products</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of precision-engineered instrument fittings
              designed for reliability and performance.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-primary-foreground">
            <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-xl opacity-90">
              Contact our team today for custom solutions and technical support
              for your instrumentation needs.
            </p>
            <Button size="lg" variant="secondary" asChild className="mt-4">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
