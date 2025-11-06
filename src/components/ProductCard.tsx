import { Product } from "@/types/product";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Package } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group h-full transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
      <CardHeader className="space-y-3">
        <div className="flex h-32 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-muted">
          <Package className="h-16 w-16 text-primary transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">
          {product.description}
        </CardDescription>
        {product.specifications && product.specifications.length > 0 && (
          <div className="space-y-1 border-t border-border pt-4">
            <p className="text-xs font-semibold text-foreground">Key Specifications:</p>
            <ul className="space-y-1">
              {product.specifications.slice(0, 2).map((spec, index) => (
                <li key={index} className="text-xs text-muted-foreground flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
