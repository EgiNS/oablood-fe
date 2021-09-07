import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from 'reactstrap';
import './Assets/style.css';

const LihatProfile = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <button className="text-button" onClick={toggle}>
                Lihat Profile
            </button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Profile Pendonor</ModalHeader>
                <ModalBody>
                    Nama : {props.name} <br />
                    Emai : {props.email} <br />
                    Jenis Kelamin : {props.jenis_kelamin} <br />
                    Golongan Darah : {props.golongan_darah} <br />
                    Rhesus : {props.rhesus}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Tutup</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default LihatProfile;