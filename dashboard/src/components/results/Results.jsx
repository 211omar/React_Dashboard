
import Result from "../result/result"
import styles from "../results/_results.module.scss"
const Results = ({monthly,total,daily})=>{
    return(
        <>
        <div className={styles.cards}>
        <Result monthly={monthly} total={total} daily={daily} />
        </div>
       
        </>
    )
}
export default Results