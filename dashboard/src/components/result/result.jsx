import styles from "./_result.module.scss";
import "../../styles/_variable.scss";
const Result = ({daily,total,monthly}) => {
  // const data = [monthly,total,daily]
  const data = {...daily,...total,...monthly}
  return (
    <>
      <div className={styles.card}>
        <div className={styles.icon} style={{ backgroundColor: "#f6695e" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 13.01H12"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9.01001H12"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99561 13H6.00459"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.99561 9H6.00459"
              stroke="#FAFAFA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{data.birinci}</span>
        <p className={styles.result}>53,989 AZN</p>
        <div className={styles.percent}>
          <p className={styles.icon_arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                fill="#1A932E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18387 10.8155C3.01302 10.6446 3.01302 10.3676 3.18387 10.1967L10.1259 3.25472C10.2967 3.08387 10.5738 3.08387 10.7446 3.25472C10.9155 3.42558 10.9155 3.70259 10.7446 3.87344L3.80259 10.8155C3.63173 10.9863 3.35473 10.9863 3.18387 10.8155Z"
                fill="#1A932E"
              />
            </svg>
          </p>
          <p>12% artım</p>
        </div>
      </div>

      <div className={styles.card}>
        <div
          className={styles.icon}
          style={{
            backgroundColor: "#f1c77e",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.5V16.5"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 3V7H21"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 2L17 7"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{data.ikinci}</span>
        <p className={styles.result}>53,989 AZN</p>
        <div className={styles.percent}>
          <p className={styles.icon_arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                fill="#1A932E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18387 10.8155C3.01302 10.6446 3.01302 10.3676 3.18387 10.1967L10.1259 3.25472C10.2967 3.08387 10.5738 3.08387 10.7446 3.25472C10.9155 3.42558 10.9155 3.70259 10.7446 3.87344L3.80259 10.8155C3.63173 10.9863 3.35473 10.9863 3.18387 10.8155Z"
                fill="#1A932E"
              />
            </svg>
          </p>
          <p>12% artım</p>
        </div>
      </div>

      <div className={styles.card}>
        <div className={styles.icon} style={{ backgroundColor: "#74f38d" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 7.5V16.5"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 6V2H18"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 7L22 2"
              stroke="#FAFAFA"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span>{data.ucuncu}</span>
        <p className={styles.result}>53,989 AZN</p>
        <div className={styles.percent}>
          <p className={styles.icon_arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.06012 3.49414C5.06012 3.25252 5.256 3.05664 5.49762 3.05664L10.5051 3.05664C10.6212 3.05664 10.7324 3.10273 10.8145 3.18478C10.8965 3.26683 10.9426 3.37811 10.9426 3.49414L10.9426 8.50164C10.9426 8.74326 10.7467 8.93913 10.5051 8.93914C10.2635 8.93914 10.0676 8.74326 10.0676 8.50164L10.0676 3.93164L5.49762 3.93164C5.256 3.93164 5.06012 3.73577 5.06012 3.49414Z"
                fill="#1A932E"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.18387 10.8155C3.01302 10.6446 3.01302 10.3676 3.18387 10.1967L10.1259 3.25472C10.2967 3.08387 10.5738 3.08387 10.7446 3.25472C10.9155 3.42558 10.9155 3.70259 10.7446 3.87344L3.80259 10.8155C3.63173 10.9863 3.35473 10.9863 3.18387 10.8155Z"
                fill="#1A932E"
              />
            </svg>
          </p>
          <p>12% artım</p>
        </div>
      </div>
    </>
  );
};
export default Result;
