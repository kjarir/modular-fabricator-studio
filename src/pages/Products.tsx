import { useState, useMemo } from "react";
import { ProductCard } from "@/components/ProductCard";
import { AdminPanel } from "@/components/AdminPanel";
import { useProducts } from "@/hooks/useProducts";
import { useAuth } from "@/hooks/useAuth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Settings } from "lucide-react";

export default function Products() {
  const { products, categories, isLoading } = useProducts();
  const { isAdmin } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const allCategories = ["All Products", ...categories];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Products" || product.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Product Catalog</h1>
              <p className="text-lg text-muted-foreground">
                Browse our complete range of instrument fittings
              </p>
            </div>
            {isAdmin && (
              <Button onClick={() => setIsAdminOpen(true)}>
                <Settings className="h-4 w-4 mr-2" />
                Admin Panel
              </Button>
            )}
          </div>
          
          {/* Admin Panel */}
          {isAdmin && (
            <AdminPanel 
              open={isAdminOpen} 
              onOpenChange={setIsAdminOpen}
            />
          )}

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${(index % 12) * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No products found matching your criteria.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </div>
    </div>
  );
}
