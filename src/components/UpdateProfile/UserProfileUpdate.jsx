import React, { useState, useEffect } from 'react';
import './UserProfileUpdate.css';
import camera from '../../assets/images/cameraimage.png';
import axios from 'axios';

function UserProfileUpdate() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        state: '',
        cityTown: '',
        streetAddress: '',
        postalCode: ''
    });
    const [profileImage, setProfileImage] = useState(null); // Default image is null
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        // Fetch user data upon component mount (similar logic can be used upon login/signup)
        fetchUserData();
    }, []); // Empty dependency array ensures this effect runs only once upon component mount

    const fetchUserData = async () => {
        try {
            // Fetch user data from your API endpoint
            const response = await axios.get('http://localhost:7198/api/User/Get-Users-Profile');

            // Update form data with fetched user data
            setFormData({
                firstName: response.data.firstName,
                lastName: response.data.lastName,
                email: response.data.email,
                phoneNumber: response.data.phoneNumber,
                state: response.data.state,
                cityTown: response.data.cityTown,
                streetAddress: response.data.streetAddress,
                postalCode: response.data.postalCode
            });

            // Update profile image if available
            if (response.data.profileImage) {
                setProfileImage(response.data.profileImage);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            // Optionally, display an error message to the user
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfileImage(reader.result); // Update profile image with uploaded image URL
        };

        if (file) {
            reader.readAsDataURL(file); // Read the uploaded file as a data URL
        }
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value);
            });
            formDataToSend.append('image', profileImage);

            const response = await axios.patch('http://localhost:7198/api/User/Update-Users-Profile', formDataToSend);
            console.log('Data saved successfully:', response.data);
            // Optionally, perform any necessary state updates or display a success message
        } catch (error) {
            console.error('Error saving data:', error);
            // Optionally, display an error message to the user
        }
    };

    return (
        <div>
            <div className="user-photo-container">
                <div className="user-photo" onClick={handleImageClick}>
                    {profileImage ? (
                        <img src={profileImage} alt="User" />
                    ) : (
                        <div className="default-user-photo"></div>
                    )}
                </div>
                <input type="file" onChange={handleImageChange} accept="image/*" className="file-input" id="file-input" style={{ display: 'none' }} />
                <label htmlFor="file-input" className="camera-button">
                    <img src={camera} alt="Camera" className="camera-photo" />
                </label>
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <div className="modal-content">
                            {profileImage && <img src={profileImage} alt="User" className="modal-image" />}
                        </div>
                    </div>
                </div>
            )}

            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-row-1">
                    <div className="form-col-1-1">
                        <label htmlFor="firstName" className='lfn roboto-regular'>First Name</label>
                        <input
                            className='fn'
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-col-1-2">
                        <label htmlFor="lastName" className='lln roboto-regular'>Last Name</label>
                        <input
                            className='ln'
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row-2">
                    <div className="form-col-2-1">
                        <label htmlFor="email" className='eln roboto-regular'>Email Address</label>
                        <input
                            className='ein'
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-col-2-2">
                        <label htmlFor="phoneNumber" className='pln roboto-regular'>Phone Number</label>
                        <input
                            className='pin'
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row-3">
                    <div className="form-col-3-1">
                        <label htmlFor="state" className='sln roboto-regular'>State</label>
                        <input
                            className='sin'
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-col-3-2">
                        <label htmlFor="cityTown" className='ctln roboto-regular'>City/Town</label>
                        <input
                            className='ctin'
                            type="text"
                            id="cityTown"
                            name="cityTown"
                            value={formData.cityTown}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-row-4">
                    <div className="form-col-4-1">
                        <label htmlFor="streetAddress" className='saln roboto-regular'>Street Address</label>
                        <input
                            className='sain'
                            type="text"
                            id="streetAddress"
                            name="streetAddress"
                            value={formData.streetAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-col-4-2">
                        <label htmlFor="postalCode" className='pcln roboto-regular'>Postal Code</label>
                        <input
                            className='pcin'
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button type="submit" className='btn '>Save Changes</button>
            </form>
        </div>
    );
}

export default UserProfileUpdate;
