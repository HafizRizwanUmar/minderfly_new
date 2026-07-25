import docsigner from './docsigner';
import cinemafly from './cinemafly';
import sanad from './sanad';
import storeflow from './storeflow';
import debtsettler from './debtsettler';
import framefly from './framefly';
import pomofly from './pomofly';
import civilcalc from './civilcalc';
import nishan from './nishan';

const products = [
  docsigner,
  cinemafly,
  sanad,
  storeflow,
  debtsettler,
  framefly,
  pomofly,
  civilcalc,
  nishan,
];

export const getProduct = (slug) => products.find((p) => p.slug === slug) || null;
export const getAllProducts = () => products;
export const getArticle = (productSlug, articleSlug) => {
  const product = getProduct(productSlug);
  if (!product) return { product: null, article: null };
  const article = product.news.find((n) => n.slug === articleSlug) || null;
  return { product, article };
};

export default products;
