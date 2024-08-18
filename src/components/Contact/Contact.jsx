import React, { useState } from 'react';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import DeleteModal from '../DeleteModal/DeleteModal';

const Contact = ({ item }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className={s.contactWraper}>
      <div className={s.infoWrapper}>
        <p className={s.nameBox}>{item.name}</p>
        <p className={s.numberBox}>{item.number}</p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        <RxCross2 />
      </button>

      <DeleteModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        item={item}
      />
    </div>
  );
};

export default Contact;
