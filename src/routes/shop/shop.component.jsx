import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
              {categoriesMap[title].map((product) => (
              <div key={product.id}><ProductCard product={product} />
              </div>
              ))}
              </div>
          </Fragment>
      ))}
    </Fragment>
  );
};

export default Shop;
