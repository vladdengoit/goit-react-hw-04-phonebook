import styles from "./Contact.module.css"
import { nanoid } from "nanoid"
const Contact =({contacts ,deleteContact})=>{
 
const listContacts = contacts.map(({number, name,id})=> (<li key ={nanoid()}>{name} : {number} <button type="button" className={styles.button} onClick={()=>deleteContact(id)}>Delete</button></li>)) 


  return(
    <div className={styles.block} >
      <h1>Contacts</h1>
      
        <ul>
          {listContacts}
        </ul>
       </div>
  )
}
export default Contact