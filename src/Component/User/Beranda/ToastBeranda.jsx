import React, { useState } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import './Assets/style.css';

const ToastBeranda = (props) => {
  const { buttonLabel } = props;
  const [show, setShow] = useState(true);

  const toggle = () => setShow(!show);

  return (
    <div>
      {/* <Toast isOpen={show}>
        <ToastHeader toggle={toggle} className=""></ToastHeader>
        <ToastBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ToastBody>
      </Toast> */}
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" isOpen={show}>
        <div class="toast-header">
          <strong class="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close" toggle={toggle}></button>
        </div>
        <div class="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
};

export default ToastBeranda;
