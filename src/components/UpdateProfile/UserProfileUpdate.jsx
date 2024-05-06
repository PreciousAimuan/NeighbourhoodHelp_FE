import React, { useState, useEffect } from 'react';
import './UserProfileUpdate.css';
import camera from '../../assets/images/cameraimage.png';
import axios from 'axios';
import Dashboard_sidebar from '../Dashboard/Dashboard_sidebar';
import Navbar from "../../components/Dashboard/Navbar"

function UserProfileUpdate() {
    const [userData, setUserData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
        image: '',
        street: '',
        city: '',
        state: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        postalCode: '',
        image: '',
        street: '',
        city: '',
        state: ''
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.onloadend = () => {
            // Create a Blob object from the file data
            const imageData = new Blob([reader.result], { type: file.type });
    
            setUserData(prevState => ({
                ...prevState,
                image: imageData
            }));
        };
    
        if (file) {
            reader.readAsArrayBuffer(file);
        }
    };

    const handleImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const getUserInfo = async () => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await axios.get(`https://localhost:7198/api/User/Get-User-Details?userId=${userId}`);
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Validate the input as it changes
        const updatedErrors = validateForm({ ...userData, [name]: value });
        setErrors(updatedErrors);
    };

    const validateForm = (userData) => {
        const errors = {};
    
        if (!userData.firstName.trim()) {
            errors.firstName = "First Name is required.";
        } else if (/[^A-Za-z ]/.test(userData.firstName)) {
            errors.firstName = "Only alphabetic characters are allowed.";
        }
    
        if (!userData.lastName.trim()) {
            errors.lastName = "Last Name is required.";
        } else if (/[^A-Za-z ]/.test(userData.lastName)) {
            errors.lastName = "Only alphabetic characters are allowed.";
        }
    
        if (!userData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
            errors.email = "Please enter a valid email address.";
        }
    
        if (!userData.phoneNumber.trim() || !/^\d+$/.test(userData.phoneNumber)) {
            errors.phoneNumber = "Only digits are allowed.";
        } else if (userData.phoneNumber.length > 11) {
            errors.phoneNumber = "Phone number should not exceed 11 digits.";
        }
    
        if (!userData.postalCode.trim()) {
            errors.postalCode = "Postal Code is required.";
        } else if (userData.postalCode.length > 6) {
            errors.postalCode = "Postal code should not exceed 6 digits.";
        }
    
        if (!userData.street.trim()) {
            errors.street = "Street Address is required.";
        }
    
        if (!userData.city.trim()) {
            errors.city = "City is required.";
        }
    
        if (!userData.state.trim()) {
            errors.state = "State is required.";
        }else if (/[^A-Za-z ]/.test(userData.state)) {
            errors.state = "Only alphabetic characters are allowed.";
        }
    
        return errors;
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Validate form data
        const formErrors = validateForm(userData);

        // Update errors state
        setErrors(formErrors);

        // If there are validation errors, stop form submission
        if (Object.keys(formErrors).length > 0) {
            setIsLoading(false); // Stop loading spinner
            return;
        }

        // Proceed with form submission if no errors
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
            throw new Error("User ID or token not found.");
        }

        try {
            const formData = new FormData();
            formData.append("firstName", userData.firstName);
            formData.append("lastName", userData.lastName);
            formData.append("email", userData.email);
            formData.append("phoneNumber", userData.phoneNumber);
            formData.append("postalCode", userData.postalCode);
            formData.append("state", userData.state);
            formData.append("city", userData.city);
            formData.append("street", userData.street);
            if (userData.image instanceof Blob) {
                formData.append("image", userData.image, userData.image.name); // Include filename
            }
            
            const response = await axios.patch(
                `https://localhost:7198/api/User/Update-Users-Profile/${userId}`,
                formData, {
                headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }

            }
            );

            console.log("Data saved successfully:", response.data);
            alert("Profile updated succesfully");
        } catch (error) {
            console.error("Error saving data:", error.response?.data ?? error.message);
            // Display error message to the user
            alert("Profile update failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='update-profile'>
            <Dashboard_sidebar />
            <div className='updateform'>
                <div className="user-photo-container">
                    <div className="user-photo" onClick={handleImageClick}>
                        {userData.image ? (
                            <img src={userData.image} alt="User" />
                        ) : (
                            <div className="default-user-photo"></div>
                        )}
                    </div>
                    <input type="file" onChange={handleImageChange} accept="image/*" className="file-input" id="image" style={{ display: 'none' }} />
                    <label htmlFor="image" className="camera-button">
                        <img src={camera} alt="Camera" className="camera-photo" />
                    </label>
                </div>
                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <div className="modal-content">
                                {userData.image && <img src={userData.image} alt="User" className="modal-image" />}
                            </div>
                        </div>
                    </div>
                )}

                <form className="form-container" onSubmit={handleSubmit}>
                    <div className="form-row-1">
                        <div className="form-col-1-1">
                            <label type='text' htmlFor="firstName" className='lfn roboto-regular'>First Name</label>
                            <input
                                className='fn'
                                type="text"
                                pattern='[A-Za-z ]+'
                                title='Only alphabetic characters allowed'
                                id="firstName"
                                name="firstName"
                                value={userData.firstName}
                                onChange={handleChange}
                                aria-describedby='firstNameError'
                            />
                            <span id="firstNameError" className="error">{errors.firstName}</span>
                        </div>
                        <div className="form-col-1-2">
                            <label htmlFor="lastName" className='lln roboto-regular'>Last Name</label>
                            <input
                                className='ln'
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={userData.lastName}
                                onChange={handleChange}
                                aria-describedby='emailError'
                            />
                            <span id='emailError' className="error">{errors.lastName}</span>
                        </div>
                    </div>
                    <div className="form-row-2">
                        <div className="form-col-2-1">
                            <label htmlFor="email" type='email' className='eln roboto-regular'>Email Address</label>
                            <input
                                className='ein'
                                id="email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                            <span className="error">{errors.email}</span>
                        </div>
                        <div className="form-col-2-2">
                            <label htmlFor="phoneNumber" className='pln roboto-regular'>Phone Number</label>
                            <input
                                className='pin'
                                // type="number"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={userData.phoneNumber}
                                onChange={handleChange}
                            />
                            <span className="error">{errors.phoneNumber}</span>
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
                                value={userData.state}
                                onChange={handleChange}
                            />
                            <span className="error">{errors.state}</span>
                        </div>
                        <div className="form-col-3-2">
                            <label htmlFor="city" className='ctln roboto-regular'>City</label>
                            <input
                                className='ctin'
                                type="text"
                                id="city"
                                name="city"
                                value={userData.city}
                                onChange={handleChange}
                                aria-describedby='cityError'
                            />
                            <span id="cityError" className="error">{errors.city}</span>
                        </div>
                    </div>
                    <div className="form-row-4">
                        <div className="form-col-4-1">
                            <label htmlFor="street" className='saln roboto-regular'>Street Address</label>
                            <input
                                className='sain'
                                type="text"
                                id="street"
                                name="street"
                                value={userData.street}
                                onChange={handleChange}
                                aria-describedby='streetError'
                            />
                            <span id='streetError' className="error">{errors.street}</span>
                        </div>
                        <div className="form-col-4-2">
                            <label htmlFor="postalCode" className='pcln roboto-regular'>Postal Code</label>
                            <input
                                className='pcin'
                                type="number"
                                id="postalCode"
                                name="postalCode"
                                value={userData.postalCode}
                                onChange={handleChange}
                                aria-describedby='postalCodeError'
                            />
                            <span id='postalCodeError' className="error">{errors.postalCode}</span>
                        </div>
                    </div>
                    <button type="submit" className='btn'>Save Changes</button>
                </form>
            </div>
            <Navbar userImage={userData.image}/>
        </div>
    );
}

export default UserProfileUpdate;