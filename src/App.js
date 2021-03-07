import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';
import styles from './App.module.css';
import { connect } from 'react-redux';
import phonebookActions from './redux/phonebook/phonebook-actions'
class App extends Component {
  render() {
    return (
      <div className={styles.container} >
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div >
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter
})
const mapDispatchToProps = dispatch => ({
  addContactToState: contact => dispatch(phonebookActions.addContact(contact)),
  deleteContact: id => dispatch(phonebookActions.deleteContact(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

