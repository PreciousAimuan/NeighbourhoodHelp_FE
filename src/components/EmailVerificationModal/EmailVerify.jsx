import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import CustomModal from './CustomModal'; // Import the modal component
import SecondModal from '../OtpModal/SecondModal';

const EmailVerify = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const response = await axios.get('https://localhost:7198/api/User/sign-up'); // Use axios.get instead of fetch
        if (response.status === 200) {
          const data = response.data; // Access response data directly
          const userEmail = data.email;
          setEmail(userEmail);
          setModalOpen(true);
        } else {
          throw new Error('Failed to fetch email');
        }
      } catch (error) {
        console.error('Error fetching email:', error);
        // Handle error
      }
    };

    fetchEmail();
  }, []);

  return (
    <div>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)} email={email} />
      <SecondModal isOpen={modalOpen} onClose={() => setModalOpen(false)} email={email} />
    </div>
  );
};

export default EmailVerify;
