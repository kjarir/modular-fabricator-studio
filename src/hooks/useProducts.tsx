import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Product } from '@/types/product';
import { toast } from 'sonner';

export function useProducts() {
  const queryClient = useQueryClient();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      return data.map(product => ({
        ...product,
        specifications: product.specifications as string[],
      })) as Product[];
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('product_categories')
        .select('name')
        .order('name');

      if (error) throw error;
      return data.map(c => c.name);
    },
  });

  const addProductMutation = useMutation({
    mutationFn: async (product: Omit<Product, 'id'>) => {
      const { data, error } = await supabase
        .from('products')
        .insert([{
          name: product.name,
          category: product.category,
          description: product.description,
          image: product.image,
          specifications: product.specifications || [],
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product added successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to add product');
    },
  });

  const updateProductMutation = useMutation({
    mutationFn: async (product: Product) => {
      const { data, error } = await supabase
        .from('products')
        .update({
          name: product.name,
          category: product.category,
          description: product.description,
          image: product.image,
          specifications: product.specifications || [],
        })
        .eq('id', product.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product updated successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update product');
    },
  });

  const deleteProductMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast.success('Product deleted successfully!');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete product');
    },
  });

  return {
    products,
    categories,
    isLoading,
    addProduct: addProductMutation.mutate,
    updateProduct: updateProductMutation.mutate,
    deleteProduct: deleteProductMutation.mutate,
  };
}
