import styles from "./Display.module.css"
const Display=({calVal})=>{
    return(
        <input classNameName={styles.display} type='text' value={calVal} readOnly/>
    )
}
export default Display;