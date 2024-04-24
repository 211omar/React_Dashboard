import styles from "./_header.module.scss";
// import img1 from "../../img/Image.png";

const Header = () => {
    return ( 
        <>
            <header>
               <nav>
               <div className={styles.nav_container}>
                    <div className={styles.logo}>
                       <h2>Dashboard</h2>
                    </div>
                    <div className={styles.adminisitrator}>
                       <div className={styles.content}>
                           <h2>Aslan Gahramanov</h2>
                           <h3>Adminisitrator</h3>
                       </div>
                       <div className={styles.image}>
                         {/* <img src={img1} alt="logo" /> */}
                       </div>
                    </div>
                </div>
               </nav>
            </header>
        </>
     );
}
 
export default Header;