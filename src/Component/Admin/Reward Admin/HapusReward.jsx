import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './Assets/style.css';
import axios from 'axios';

const HapusReward = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const deleteReward = () => {
    axios.delete(`admin/delete-reward/${props.id}`).then(
      res => {
        console.log(res);
        alert("Reward berhasil dihapus!");
      },
      err => {
        console.log(err);
        alert("Reward gagal dihapus!")
      }
    )
  }

  return (
    <div>
      <button className="text-button" onClick={toggle}>
        Hapus
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody className="modal-body d-flex justify-content-center align-items-center">
          <h4>Apakah Anda yakin ingin menghapus reward ini ?</h4>
        </ModalBody>
        <ModalFooter className="footer-modal d-flex justify-content-center border-0">
          <button type="button" className="btn batal mx-2" onClick={toggle}>
            Batal
          </button>{' '}
          <button type="button" className="btn lanjutkan mx-2" onClick={deleteReward}>
            Lanjutkan
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default HapusReward;
