import { useState, useMemo } from 'react';
import styles from './FormPhoneBook.module.css';
import { nanoid } from 'nanoid';
const INITIAL_State = {
  name: '',
  number: '',
};

const FormPhonebook = ({ handlerFormSPhonebook }) => {
  const idName = useMemo(() => nanoid(), []);
  const idNumber = useMemo(() => nanoid(), []);
  const [state, setState] = useState(INITIAL_State);

  const reset = () => {
    setState(INITIAL_State);
  };
  const handlerChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handlerFormSubmit = e => {
    e.preventDefault();
    handlerFormSPhonebook({ ...state });
    reset();
  };

  const { name, number } = state;

  return (
    <form className={styles.baseForm} onSubmit={handlerFormSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor="contact-name">Name</label>
      <input
        id={idName}
        value={name}
        type="text"
        required
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={handlerChange}
      />

      <label htmlFor="contact-namber">Number</label>
      <input
        id={idNumber}
        value={number}
        type="tel"
        required
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        onChange={handlerChange}
      />

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};
export default FormPhonebook;

// class FormPhonebook extends Component {
//   idName = nanoid();
//   idNumber = nanoid();

//   state={...INITIAL_State}

//   handlerFormSubmit = (e) => {
//     e.preventDefault();
//     this.props.handlerFormSPhonebook({...this.state})
//     this.reset()
//   };

//   handlerChange=({target})=>{
//     const{name,value}=target
//     this.setState({[name]:value})
//   }
//   reset(){
//     this.setState({...INITIAL_State})
//   }

//   render() {
//     const{idName,idNumber,handlerChange,handlerFormSubmit}= this
//     const{ name,number}=this.state

//        return (
//       <form className={styles.baseForm}  onSubmit={handlerFormSubmit}>
//         <h1>Phonebook</h1>
//         <label htmlFor="contact-name">Name</label>
//         <input
//           id={idName}
//           value={name}
//           type="text"
//           required name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           onChange={handlerChange}
//         />

//         <label htmlFor="contact-namber">Number</label>
//         <input
//           id={idNumber}
//           value={number}
//           type="tel"
//           required name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           onChange={handlerChange}
//         />

//         <button type="submit" className={styles.button}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
