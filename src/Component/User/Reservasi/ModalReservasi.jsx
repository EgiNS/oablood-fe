import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './Assets/style.css';

const ModalReservasi = (props) => {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus officia nam non quidem dolorum. Repellendus magni unde est expedita, nemo laboriosam neque vitae minus praesentium necessitatibus voluptatem blanditiis ad
              sint nobis quibusdam molestias! Repellat voluptas non ad doloremque sapiente eum natus dolorum tempora cum ratione beatae perspiciatis voluptate fugiat aliquid facilis, ducimus placeat explicabo. Nulla praesentium, iste
              consectetur accusamus nisi recusandae illo laborum. Ipsum iusto accusamus ullam dolor et, inventore repudiandae nostrum officiis delectus fugiat rem, quia, nesciunt tenetur doloremque deleniti laudantium iste mollitia.
              Voluptatem, maiores cumque totam voluptates vitae, doloribus sint eum architecto nulla praesentium veniam, non expedita officiis!
            </p>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalReservasi;
