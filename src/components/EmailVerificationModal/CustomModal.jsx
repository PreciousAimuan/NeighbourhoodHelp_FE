import React, {useState} from 'react';
import './customModal.css';
import Check from '../assetsForEmailModal/checkmark.svg'
import SecondModal from '../OtpModal/SecondModal';

const CustomModal = ({ isOpen }) => {
  const [modalOpen, setModalOpen] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-content">
        <div className="custom-modal-body">
          <div><img src={Check} alt='/'/></div>
          <h3>Verify Otp</h3>
          <p>An otp has been sent to your email. Please check your inbox and continue here .</p>
          <button onClick={() => setModalOpen(true)} className="custom-modal-action-button">
            Continue
          </button>
          <SecondModal isOpen={modalOpen} onClose={() => setModalOpen(false)} /> 
        </div>
      </div>
    </div>
  );
};

export default CustomModal;