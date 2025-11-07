import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Product } from "@/types/product";
import { toast } from "sonner";
import { Plus } from "lucide-react";

interface AddProductDrawerProps {
  onAddProduct: (product: Omit<Product, "id">) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  existingCategories: string[];
}

export const AddProductDrawer = ({ 
  onAddProduct, 
  open, 
  onOpenChange,
  existingCategories 
}: AddProductDrawerProps) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    description: "",
    specifications: "",
  });
  const [isAddingNewCategory, setIsAddingNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.category || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    const categoryToUse = isAddingNewCategory ? newCategory : formData.category;

    if (!categoryToUse) {
      toast.error("Please select or add a category");
      return;
    }

    const newProduct = {
      name: formData.name,
      category: categoryToUse,
      description: formData.description,
      specifications: formData.specifications
        ? formData.specifications.split("\n").filter(spec => spec.trim())
        : [],
    };

    onAddProduct(newProduct);
    toast.success("Product added successfully!");
    
    // Reset form
    setFormData({
      name: "",
      category: "",
      description: "",
      specifications: "",
    });
    setIsAddingNewCategory(false);
    setNewCategory("");
  };

  // Filter out "All Products" from category dropdown
  const availableCategories = existingCategories.filter(cat => cat !== "All Products");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add New Product</SheetTitle>
          <SheetDescription>
            Add a new product to your catalog. Press Ctrl+Shift+A to open this drawer.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Ball Valve"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category *</Label>
            {!isAddingNewCategory ? (
              <div className="flex gap-2">
                <Select
                  value={formData.category}
                  onValueChange={(value) => setFormData({ ...formData, category: value })}
                >
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  onClick={() => setIsAddingNewCategory(true)}
                  title="Add new category"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="space-y-2">
                <Input
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new category name"
                  required
                />
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsAddingNewCategory(false);
                      setNewCategory("");
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => {
                      if (newCategory.trim()) {
                        setFormData({ ...formData, category: newCategory });
                        setIsAddingNewCategory(false);
                      }
                    }}
                  >
                    Use Category
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the product features and benefits"
              rows={4}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="specifications">Specifications (Optional)</Label>
            <Textarea
              id="specifications"
              value={formData.specifications}
              onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
              placeholder="Enter specifications (one per line)&#10;e.g., Material: SS316&#10;Pressure Rating: Up to 6000 PSI"
              rows={6}
            />
            <p className="text-sm text-muted-foreground">
              Enter each specification on a new line
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="submit" className="flex-1">
              Add Product
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};
