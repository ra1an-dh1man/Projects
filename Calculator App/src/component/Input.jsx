import styles from './Input.module.css';
const Input = ({displayValue}) => {
    return <>
    <input className={styles.input} value={displayValue} placeholder='0' readOnly></input>
    </>

}

export default Input;