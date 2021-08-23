import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CardReward from './card';
import laptop from './Assets/laptop.jpg';
import poin from './Assets/poin.svg';
import './Assets/style.css';

const ModalHadiah = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button type="button" className="btn p-0" onClick={toggle}>
        {buttonLabel}
        <p className="card-text text-left teks-poin ">
          <img src={poin} alt="poin" /> 999 Poin
        </p>
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader className="text-center my-3 border-0 fs-6">Apakah Anda yakin untuk menukarkan produk ini?</ModalHeader>
        <ModalBody className="d-flex justify-content-center mb-3">
          <img src={laptop} className="w-75 mx-4 mb-3" alt="laptop" />
        </ModalBody>
        <div className="mx-4 my-2">
          <p className="nama-hadiah">Contoh Hadiah</p>
          <p className="teks-poin">
            {' '}
            <img src={poin} alt="poin" /> 999 Poin
          </p>
        </div>
        <div className="jumlah-poin d-flex justify-content-center">Poin anda saat ini adalah jumlah-poin</div>
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

export default ModalHadiah;
