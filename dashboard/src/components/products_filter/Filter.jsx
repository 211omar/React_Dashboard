import Dropdown from "../dropdown/Dropdown";
import SearchInput from "../searchInput/SearchInput";
import styles from "./_filter.module.scss";

const Filter = () => {
  return (
    <>
      <div className={styles.filter}>

        <SearchInput>Search</SearchInput>
        
        <Dropdown>Tarix Üzrə</Dropdown>
        <Dropdown>Kateqoriya üzrə</Dropdown>
      </div>
    </>
  );
};

export default Filter;
