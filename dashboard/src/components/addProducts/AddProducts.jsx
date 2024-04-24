import styles from "../../components/addProducts/_addProducts.module.scss"
import { AddBtn, InputBtn } from "../UI/Button/Button"
import Frame from "../UI/Frame/Frame"
import Input from "../UI/Input/Input"


const AddProducts = ()=>{
  let d = new Date()
  let day = d.getDate()
  let mon = (d.getMonth()) + 1
  let year = d.getFullYear()
  let fulldate = `${day}/${mon}/${year}`
  console.log(year);
    return(
        <>
        <div className={styles.addProductsContainer}>
       <form>
       <div className={styles.row_1}>
        <InputBtn/>
         <Input>
         Məhsul adi
         </Input>
         <Input>
         Məhsul kodu
         </Input>
          <Frame>
            Kateqoriya
          </Frame>
          <Frame>
            Firma
          </Frame>
        </div>
        <div className={styles.row_2}>
          <Input>
          Alış qiyməti
          </Input>
          <Input>
          Satış qiyməti
          </Input>
          <Input>
          Miqdar
          </Input>
          <Input>
          {fulldate}
          </Input>
          <AddBtn/>

        </div>
       </form>
        </div>
        </>
    )
}
export default AddProducts