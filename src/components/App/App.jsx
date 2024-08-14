import React, { useEffect } from 'react';
import ContactList from '../ContactList/ContactList';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default App;
