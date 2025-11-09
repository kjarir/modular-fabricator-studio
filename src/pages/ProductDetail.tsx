import { useParams, Link, useNavigate } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Package, CheckCircle2, Info } from "lucide-react";
import frontFerrule from "@/assets/products/front-ferrule.jpg";
import union from "@/assets/products/union.jpg";
import elbow from "@/assets/products/elbow.jpg";
import connector from "@/assets/products/connector.jpg";

const productImages: Record<string, string> = {
  "1": frontFerrule,
  "2": frontFerrule,
  "3": frontFerrule,
  "4": union,
  "5": union,
  "6": union,
  "7": elbow,
  "8": elbow,
  "11": elbow,
  "15": elbow,
  "9": connector,
  "10": connector,
  "12": connector,
  "13": connector,
  "14": connector,
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, isLoading } = useProducts();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading product...</p>
        </div>
      </div>
    );
  }
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <Package className="h-16 w-16 mx-auto text-muted-foreground" />
          <h2 className="text-2xl font-bold">Product Not Found</h2>
          <Button onClick={() => navigate("/products")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </div>
      </div>
    );
  }

  // Use cloud image URL if available, otherwise fallback to mapped images
  const productImage = product.image || productImages[product.id];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8 animate-fade-in">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <span>/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Button
          variant="outline"
          onClick={() => navigate("/products")}
          className="mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Product Detail Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 bg-muted/30 backdrop-blur">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-white">
                {productImage ? (
                  <img
                    src={productImage}
                    alt={product.name}
                    className="w-full h-full object-contain p-8 hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Package className="h-32 w-32 text-muted-foreground/30" />
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && product.specifications.length > 0 && (
              <Card className="p-6 bg-muted/50 backdrop-blur border-primary/20">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Specifications</h3>
                </div>
                <ul className="space-y-3">
                  {product.specifications.map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 animate-fade-in"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{spec}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" asChild className="flex-1 min-w-[200px]">
                <Link to="/contact">Request Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="flex-1 min-w-[200px]"
              >
                <Link to="/contact">Technical Support</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {products.filter((p) => p.category === product.category && p.id !== product.id).length > 0 && (
          <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter(
                  (p) => p.category === product.category && p.id !== product.id
                )
                .slice(0, 4)
                .map((relatedProduct, index) => (
                <Link
                  key={relatedProduct.id}
                  to={`/products/${relatedProduct.id}`}
                  className="group animate-scale-in"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <Card className="p-4 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-square bg-muted rounded-lg mb-4 overflow-hidden">
                      {(relatedProduct.image || productImages[relatedProduct.id]) ? (
                        <img
                          src={relatedProduct.image || productImages[relatedProduct.id]}
                          alt={relatedProduct.name}
                          className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="h-16 w-16 text-muted-foreground/30" />
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      {relatedProduct.category}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
