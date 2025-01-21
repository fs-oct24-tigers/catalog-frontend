import { FilterType, SortType } from '@/types';
import supabase from '../lib/supabase';

export async function getProducts(
  category = 'phones',
  perPage = 16,
  page = 1,
  sorting: SortType = 'newest',
) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const start = (page - 1) * perPage;
  const end = start + perPage - 1;

  const sortMapping: Record<SortType, { column: string; ascending: boolean }> =
    {
      alphabetically: { column: 'name', ascending: true },
      cheapest: { column: 'priceDiscount', ascending: true },
      expensive: { column: 'priceDiscount', ascending: false },
      newest: { column: 'year', ascending: false },
      oldest: { column: 'year', ascending: true },
    };

  const { column, ascending } = sortMapping[sorting];

  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .eq('category', category)
    .order(column, { ascending })
    .range(start, end);

  if (productsError) {
    throw productsError;
  }

  const { count: totalCount, error: countError } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })
    .eq('category', category);

  if (countError) {
    throw countError;
  }

  return { products, totalCount };
}

export async function getSliderProducts(
  category: string,
  filterType: FilterType,
) {
  let query = supabase.from('products').select('*').eq('category', category);

  if (filterType === 'newModels') {
    query = query.gt('year', 2017);
  } else if (filterType === 'hotPrices') {
    query = supabase.rpc('get_hot_price').eq('category', category);
  }

  const { data: products, error: productError } = await query;

  if (productError) {
    throw productError;
  }

  return products;
}

export async function getSearchProducts(searchQuery: string) {
  const { data: products, error: productError } = await supabase
    .from('products')
    .select('*')
    .ilike('name', `%${searchQuery}%`);

  if (productError) {
    throw productError;
  }

  return products;
}

export async function getProduct(itemId: string) {
  const { data: product, error: productError } = await supabase
    .from('products')
    .select('*')
    .eq('itemId', itemId)
    .single();

  if (productError) {
    throw productError;
  }
  return product;
}

export async function getCategories() {
  const { data: categories, error } = await supabase.rpc(
    'get_unique_categories',
  );

  if (error) {
    throw error;
  }

  return categories.map((item: { category: string }) => item.category);
}
