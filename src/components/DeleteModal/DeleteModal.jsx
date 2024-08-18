import React from 'react';
import s from './DeleteModal.module.css';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';

const DeleteModal = ({ isOpen, onClose, item }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.modalWraper}>
            <div className={s.modalWindow}>
              <button
                className={s.modaleClose}
                onClick={() => {
                  onClose();
                }}
              >
                <RxCross2 />
              </button>
              <h2>Are you sure you want to delete this contact?</h2>
              <button
                onClick={() => {
                  if (item && item.id) {
                    dispatch(deleteContactThunk(item.id));
                    onClose();
                  }
                }}
              >
                Yes
              </button>
              <button
                onClick={() => {
                  onClose();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteModal;
