import styles from "./_daily.module.scss";
import Products from "../../components/products/Products";
import Filter from "../../components/products_filter/Filter";
import Results from "../../components/results/Results";
import { useContext } from "react";
import { ToggleContext } from "../../context/ToggleSidebar";

const Daily = ({daily}) => {
  // const {daily} = data 
  const { open } = useContext(ToggleContext)
  return (
    <section className={open ? styles.dashboard : styles.dashboard_open}>
      <Results daily={daily} />
      <Filter />
      <Products />
    </section>
  );
};

export default Daily;
