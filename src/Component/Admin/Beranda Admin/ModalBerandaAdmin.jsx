import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Assets/style.css';

const ModalBerandaAdmin = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="text-button" onClick={toggle}>
        Hapus
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody className="modal-body d-flex justify-content-center align-items-center">
          <h4>Apakah Anda yakin ingin menghapus artikel ini ?</h4>
        </ModalBody>
        <ModalFooter className="footer-modal d-flex justify-content-center border-0">
          <button type="button" className="btn batal mx-2" onClick={toggle}>
            Batal
          </button>{' '}
          <button type="button" className="btn lanjutkan mx-2">
            Lanjutkan
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalBerandaAdmin;
