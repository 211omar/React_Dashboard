import { useContext } from "react";
import styles from "./_sell.module.scss";
import { ToggleContext } from "../../context/ToggleSidebar";
import SearchInput from "../../components/searchInput/SearchInput";
import Selltable from "../../components/sellTable/Selltable";
import SellTotal from "../../components/sellTotal/Selltotal";
import { SquareBtn } from "../../components/UI/Button/Button";
const Sell = () => {
  const { open } = useContext(ToggleContext);

  return (
    <section className={open ? styles.dashboard : styles.dashboard_open}>
      <div className="flex gap-6">
       
        <div className='w-7/12 flex flex-col gap-6 right'>
          <div className={`${styles.search} `}>
            <h5>Axtarış</h5>
            <div className={styles.inputs}>
              <SearchInput>barkod uzre axtaris</SearchInput>
              <SearchInput>mehsul uzre axtaris</SearchInput>
            </div>
          </div>

          <div className={styles.products}>
            <Selltable />
          </div>
        </div>
        <div className='w-5/12 flex flex-col gap-6'>
          <div className={`${styles.sellTotal}`}>
            <SellTotal />
          </div>
          <div className={styles.payment}>
            <h4><strong>Ümumi məbləğ:</strong> 36.99</h4>
            <div className={styles.yes_no}>
              <span>Ödəniş:</span>
              <div className={styles.method}>
                  <SquareBtn >
                    Ödənişi təstiqlə
                  </SquareBtn>
                  <SquareBtn white={true}>
                    Ödənişi ləğv et
                  </SquareBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sell;
