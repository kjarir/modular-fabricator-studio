import { Product } from "@/types/product";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Package } from "lucide-react";
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

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const productImage = productImages[product.id];

  return (
    <Link to={`/products/${product.id}`} className="block group">
      <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 overflow-hidden">
        {/* Product Image */}
        <div className="aspect-square bg-muted relative overflow-hidden">
          {productImage ? (
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Package className="h-20 w-20 text-muted-foreground/30 group-hover:scale-110 transition-transform duration-300" />
            </div>
          )}
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="shadow-md">
              {product.category}
            </Badge>
          </div>
        </div>

        <CardHeader>
          <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
            {product.name}
            <ArrowRight className="h-5 w-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {product.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          {product.specifications && product.specifications.length > 0 && (
            <div className="space-y-1">
              <p className="text-sm font-semibold text-muted-foreground">Key Features:</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                {product.specifications.slice(0, 2).map((spec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};
