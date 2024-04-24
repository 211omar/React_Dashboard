import styles from "./_search.module.scss";
import searchicon from '../../assets/search-normal.svg'
const SearchInput = ({children}) => {
  return (
    <>
      <div className={styles.search}>
        <input
          placeholder={children}
          type="search"
          id="search"
          className={styles.srcInput}
        />
    <img src={searchicon} alt="" />
      </div>
    </>
  );
};

export default SearchInput;
