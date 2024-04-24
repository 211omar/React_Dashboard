import { useContext } from "react";
import Products from "../../components/products/Products";
import Filter from "../../components/products_filter/Filter";
import Results from "../../components/results/Results";
import styles from "./_monthly.module.scss";
import { ToggleContext } from "../../context/ToggleSidebar";
const Monthly = ({monthly}) => {
  const {open} = useContext(ToggleContext)
  
  
  return (
    <section className={open ? styles.dashboard : styles.dashboard_open}>
      <Results monthly={monthly}/>
      <Filter />
      <Products />
    </section>
  );
};

export default Monthly;
