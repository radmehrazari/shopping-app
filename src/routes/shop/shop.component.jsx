import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
  const { defaultProducts } = useContext(ProductContext);
  return (
    <div className="products-container">
      {defaultProducts.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard product={product}></ProductCard>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
