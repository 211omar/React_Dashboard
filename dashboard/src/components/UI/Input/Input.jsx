import styles from "./_input.module.scss"

const Input = ({children}) =>{
    return(
        <>
         <input required className={styles.inputs} type="text" placeholder={children}/>
        </>
    )
}
export default Input