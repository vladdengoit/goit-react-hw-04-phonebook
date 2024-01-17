import styles from "../FormPhoneBook/FormPhoneBook.module.css"
const Filter =({propsFilter})=>{

return(
    <>
    <h1 className={styles.inputtitle}>Find contacts by name :</h1>
     <input onChange={propsFilter} name="filter" placeholder="Search" className={styles.input} />
     </>
  )
}
export default Filter