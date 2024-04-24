import { useContext } from "react";
import Products from "../../components/products/Products";
import Filter from "../../components/products_filter/Filter";
import Results from "../../components/results/Results";
import styles from "../newProduct/_newProduct.module.scss"
import { ToggleContext } from "../../context/ToggleSidebar";
import AddProducts from "../../components/addProducts/AddProducts";
import ListOptions from "../../components/listofoptions/List";

const NewProduct = () => {
    const {open} = useContext(ToggleContext)
    return ( 
        <section className={open ? styles.dashboard : styles.dashboard_open}>
            <AddProducts/>
            <Results/>
            <Filter/>
            <Products/>
            <ListOptions/>
        </section>
     );
}
 
export default NewProduct;