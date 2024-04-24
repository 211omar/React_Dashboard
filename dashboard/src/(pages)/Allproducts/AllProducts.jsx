import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleSidebar";
import Products from "../../components/products/Products";
import Filter from "../../components/products_filter/Filter";
import Results from "../../components/results/Results";
import styles from "./_allProducts.module.scss";
const AllProducts = ({ total }) => {
  // const { total } = data;
  const { open } = useContext(ToggleContext);
  return (
    <section className={open ? styles.dashboard : styles.dashboard_open}>
      <Results total = {total} />
      <Filter />
      <Products />
    </section>
  );
};

export default AllProducts;
