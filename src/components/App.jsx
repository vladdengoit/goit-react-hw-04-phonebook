import { Component } from 'react';
import FormPhonebook from './FormPhoneBook/FormPhoneBook';
import Contact from './Contact/Contact';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkName(data) {
    const normalizedDataName = data.name.toLowerCase();
    const { contacts } = this.state;

    const checkContact = contacts.find(el => {
      const normalizedCurrentName = el.name.toLowerCase();
      return normalizedDataName === normalizedCurrentName;
    });
    console.log(checkContact);
    return Boolean(checkContact);
  }

  handlerFormSPhonebook = data => {
    console.log(this.checkName(data));
    if (this.checkName(data)) {
      return alert(`${data.name} is already in the list of contacts`);
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  deleteContact = id => {
    console.log(id);
    this.setState(({ contacts }) => {
      const filtercontacts = contacts.filter(el => el.id !== id);
      return {
        contacts: filtercontacts,
      };
    });
  };
  propsFilter = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  filterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterNormalize = filter.toLowerCase();
    const filteredContacts =contacts.filter(el => {
      const checkedEl = el.name.toLowerCase();
      return checkedEl.includes(filterNormalize);
    });
    return filteredContacts
  }

  render() {
    const contacts = this.filterContacts();
    return (
      <>
        <FormPhonebook handlerFormSPhonebook={this.handlerFormSPhonebook} />

        <Contact contacts={contacts} deleteContact={this.deleteContact} />

        <Filter propsFilter={this.propsFilter} />
      </>
    );
  }
}
export default App;
