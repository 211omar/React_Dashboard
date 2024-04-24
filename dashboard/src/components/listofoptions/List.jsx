import styles from "./_listoptions.module.scss";
const ListOptions = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <div className={styles.circle}>
          <div className={styles.circle_inner}>
            <span className={styles.icon1}>
              <svg
                width="2"
                height="11"
                viewBox="0 0 2 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 10C2 10.5523 1.55228 11 1 11C0.447715 11 0 10.5523 0 10V4C0 3.44772 0.447715 3 1 3C1.55228 3 2 3.44772 2 4V10ZM1 2C0.447715 2 0 1.55229 0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1C2 1.55229 1.55228 2 1 2Z"
                  fill="#1778FB"
                />
              </svg>
            </span>
            <span className={styles.icon2}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#1778FB"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <span className={styles.name}>Əlavə et</span>
      </li>
      <li className={styles.list_item}>
        <div className={styles.circle}>
          <div className={styles.circle_inner}>
            <span className={styles.icon3}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2599 3.6L5.04985 12.29C4.73985 12.62 4.43985 13.27 4.37985 13.72L4.00985 16.96C3.87985 18.13 4.71985 18.93 5.87985 18.73L9.09985 18.18C9.54985 18.1 10.1799 17.77 10.4899 17.43L18.6999 8.74C20.1199 7.24 20.7599 5.53 18.5499 3.44C16.3499 1.37 14.6799 2.1 13.2599 3.6Z"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.8901 5.05C12.3201 7.81 14.5601 9.92 17.3401 10.2"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M3 22H21"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            </div>
        </div>
        <span className={styles.name}>Düzəliş et</span>
      </li>
      <li className={styles.list_item}>
        <div className={styles.circle}>
          <div className={styles.circle_inner}>
            <span className={styles.icon4}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.8499 9.14L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.14"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.3301 16.5H13.6601"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 12.5H14.5"
                  stroke="#808080"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <span className={styles.name}>Sil</span>
      </li>
    </ul>
  );
};

export default ListOptions;
