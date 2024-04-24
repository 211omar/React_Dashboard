import styles from "./_sidebar.module.scss";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ToggleContext } from "../../context/ToggleSidebar";
const Sidebar = () => {
  
  const aktiv = `${styles.activee} ${styles.link}`;
  const { open, setIcon } = useContext(ToggleContext);

  return (
    <>
      <div className={open ? styles.sidebar : styles.sidebar2}>
        <div className={styles.categories}>
          <div className={styles.wrapper}>
            <div className={styles.sidebar_top}>
              <span
                className={open ? styles.close : styles.open}
                onClick={setIcon}
              >
                <svg
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.414376 1.46855C0.155619 1.1451 0.20806 0.673133 0.531506 0.414376C0.854953 0.155619 1.32692 0.20806 1.58568 0.531506L5.58568 5.53151C5.80481 5.80542 5.80481 6.19464 5.58568 6.46855L1.58568 11.4685C1.32692 11.792 0.854952 11.8444 0.531506 11.5857C0.208059 11.3269 0.155618 10.855 0.414376 10.5315L4.03956 6.00003L0.414376 1.46855ZM6.41438 1.46855C6.15562 1.1451 6.20806 0.673133 6.53151 0.414376C6.85495 0.155619 7.32692 0.20806 7.58568 0.531507L11.5857 5.53151C11.8048 5.80542 11.8048 6.19464 11.5857 6.46855L7.58568 11.4685C7.32692 11.792 6.85495 11.8444 6.53151 11.5857C6.20806 11.3269 6.15562 10.855 6.41437 10.5315L10.0396 6.00003L6.41438 1.46855Z"
                    fill="#1778FB"
                  />
                </svg>
              </span>
            </div>
            <ul className={styles.menu}>
              <li>
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? aktiv : styles.link;
                  }}
                  to="/"
                >
                  <span className={styles.line}></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8.81 2L5.19 5.63"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.19 2L18.81 5.63"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.76001 14V17.55"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M14.36 14V17.55"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className={styles.name}>Məhsullar</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                    return isActive ? aktiv : styles.link;
                  }} to="/sell">
                  <span className={styles.line}></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 2H3.74001C4.82001 2 5.67 2.93 5.58 4L4.75 13.96C4.61 15.59 5.89999 16.99 7.53999 16.99H18.19C19.63 16.99 20.89 15.81 21 14.38L21.54 6.88C21.66 5.22 20.4 3.87 18.73 3.87H5.82001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.25 22C16.9404 22 17.5 21.4404 17.5 20.75C17.5 20.0596 16.9404 19.5 16.25 19.5C15.5596 19.5 15 20.0596 15 20.75C15 21.4404 15.5596 22 16.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.25 22C8.94036 22 9.5 21.4404 9.5 20.75C9.5 20.0596 8.94036 19.5 8.25 19.5C7.55964 19.5 7 20.0596 7 20.75C7 21.4404 7.55964 22 8.25 22Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 8H21"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.name}>Satış</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                    return isActive ? aktiv : styles.link;
                  }} to="/daily">
                  <span className={styles.line}></span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.62 16L11.12 17.5L14.37 14.5"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.81 2L5.19 5.63"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.19 2L18.81 5.63"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 7.85001C2 6.00001 2.99 5.85001 4.22 5.85001H19.78C21.01 5.85001 22 6.00001 22 7.85001C22 10 21.01 9.85001 19.78 9.85001H4.22C2.99 9.85001 2 10 2 7.85001Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className={styles.name}>Günlük satışlar</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                    return isActive ? aktiv : styles.link;
                  }} to="/monthly">
                  <span className={styles.line}></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 7V21C2 21.83 2.94 22.3 3.6 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.29 22.29C8.68 22.68 9.32 22.68 9.71 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.27002 13.73L11.73 8.27002"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9247 13.5H11.9337"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.1947 8.5H6.20368"
                      stroke="#292D32"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.name}>Aylıq hesabat</span>
                </NavLink>
              </li>
              <li>
                <NavLink className={({ isActive }) => {
                    return isActive ? aktiv : styles.link;
                  }} to="/newproduct">
                  <span className={styles.line}></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.01 11.22V15.71C21.01 20.2 19.22 22 14.72 22H9.33002C8.75002 22 8.21998 21.97 7.72998 21.9"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.03998 15.52V11.22"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.03 12C13.86 12 15.21 10.5101 15.03 8.68005L14.36 2H9.69001L9.02003 8.68005C8.84003 10.5101 10.2 12 12.03 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.33 12C20.35 12 21.83 10.36 21.63 8.34998L21.35 5.59998C20.99 2.99998 19.99 2 17.37 2H14.32L15.02 9.01001C15.2 10.66 16.68 12 18.33 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.66998 12C7.31998 12 8.80996 10.66 8.96996 9.01001L9.19 6.80005L9.66998 2H6.61999C3.99999 2 3.00001 2.99998 2.64001 5.59998L2.35998 8.34998C2.15998 10.36 3.64998 12 5.66998 12Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 19C9 19.75 8.78998 20.4601 8.41998 21.0601C8.22998 21.3801 7.99998 21.67 7.72998 21.9C7.69998 21.94 7.67 21.97 7.63 22C6.93 22.63 6.01 23 5 23C3.78 23 2.68997 22.45 1.96997 21.59C1.94997 21.56 1.92002 21.54 1.90002 21.51C1.78002 21.37 1.67002 21.2201 1.58002 21.0601C1.21002 20.4601 1 19.75 1 19C1 17.74 1.58 16.61 2.5 15.88C2.67 15.74 2.84998 15.62 3.03998 15.52C3.61998 15.19 4.29 15 5 15C6 15 6.89998 15.36 7.59998 15.97C7.71998 16.06 7.82999 16.17 7.92999 16.28C8.58999 17 9 17.95 9 19Z"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.48999 18.98H3.51001"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 17.52V20.51"
                      stroke="#292D32"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className={styles.name}>Yeni məhsul</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.log_out}>
            <div
              className={`${styles.wrapper} flex items-center justify-center gap-4 w-full`}
            >
              <span className={styles.line}></span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.8999 7.56C9.2099 3.96 11.0599 2.49 15.1099 2.49H15.2399C19.7099 2.49 21.4999 4.28 21.4999 8.75V15.27C21.4999 19.74 19.7099 21.53 15.2399 21.53H15.1099C11.0899 21.53 9.2399 20.08 8.9099 16.54"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.0001 12H3.62012"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.85 8.65L2.5 12L5.85 15.35"
                  stroke="#292D32"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={styles.exit}>Çıxış</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
