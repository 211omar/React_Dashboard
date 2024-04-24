import styles from "../Pagination/_pagination.module.scss"

const Pagination = ()=>{
    return(
        <>
          <div className={styles.pagination}>
            <div className={styles.arrow_left}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13.28L5.65334 8.9333C5.14001 8.41997 5.14001 7.57997 5.65334 7.06664L10 2.71997" stroke="#1778FB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
            <div className={styles.btn}>
              1
            </div>
            <div className={styles.btn}>
              2
            </div>
            <div className={styles.btn}>
              3
            </div>
            <div className={styles.btn}>
              4
            </div>
            <div className={styles.btn}>
              5
            </div>
            <div className={styles.arrow_right}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 13.28L5.65334 8.9333C5.14001 8.41997 5.14001 7.57997 5.65334 7.06664L10 2.71997" stroke="#1778FB" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </div>
          </div>
        </>
    )
}
export default Pagination