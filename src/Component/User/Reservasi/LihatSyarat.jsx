import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Assets/style.css';

const LihatSyarat = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="text-button" onClick={toggle}>
        Lihat Syarat Donor
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle} className="close-button" charCode="close"></ModalHeader>
        <ModalBody className="modal-body d-flex justify-content-center align-items-center">
          <div className="field-persyaratan">
            <h3 className="judul-persyaratan mb-3">Persyaratan Khusus Donor</h3>
            <p className="muted-text">
              {props.syarat}
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default LihatSyarat;
