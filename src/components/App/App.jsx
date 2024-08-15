import React, { useEffect } from 'react';
// import ContactList from '../ContactList/ContactList';
// import ContactForm from '../ContactForm/ContactForm';
// import SearchBox from '../SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <>
      {/* <SearchBox />
      <ContactForm />
      <ContactList /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
