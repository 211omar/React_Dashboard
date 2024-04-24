import { useEffect, useState } from "react"
import styles from "../Frame/_frame.module.scss"

const Frame = ({children})=>{
//   const [element,setElement] = useState(null);
// console.log(element);
// useEffect(()=>{
//   const select = document.getElementById("Sel");
//   setElement(select)
// },[]);
// if(!element.value){
// alert("nnnnnn")
// }
    return(
        <select id="Sel" className={styles.select_box} >
        <option  value={children} disabled selected defaultValue={children} >{children}</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
        <option value="option">option</option>
      </select>
        
    )
}
export default Frame