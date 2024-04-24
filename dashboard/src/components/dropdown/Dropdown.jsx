import styles from "./_dropdown.module.scss";
const Dropdown = ({ children }) => {
  return (
    
      <select  className={styles.select_box} >
        <option  value={children} disabled selected defaultValue={children} >{children}</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
      </select>
  );
};

export default Dropdown;
