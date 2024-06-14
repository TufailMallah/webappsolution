import React, { Fragment, useState } from "react";
import Stylo from '../components/login.module.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState(''); // State for success message

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = async () => {
        setEmailError('');
        setPasswordError('');
        setErrorMessage('');
        setSuccessMessage(''); // Clear success message

        let valid = true;
        if (!email) {
            setEmailError('Email is required');
            valid = false;
        }
        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        }
    
        if (valid) {
            try {
                const response = await axios.post('http://localhost:3000/api/login', {
                    email,
                    password
                });
                console.log("tufail", response);
    
                if (response.status === 201) {
                    console.log('Login successful');
                    // Save token to local storage
                    localStorage.setItem('token', response.data.token);
                    // Show success message
                    setSuccessMessage('Login successful');
                    // Redirect to dashboard after 2 seconds
                    setTimeout(() => {
                        navigate('/dashboard'); // Redirect to the dashboard route
                    }, 2000);
                } else {
                    console.error('Login failed');
                    setErrorMessage('Login failed. Please check your credentials.');
                }
            } catch (error) {
                console.error('An error occurred while logging in:', error);
                setErrorMessage('An error occurred while logging in. Please try again later.');
            }
        }
    };
    

    return (
        <Fragment>
            <section className={Stylo.login}>
                <div className="container">
                    <div className="row justify-content-center mt-2">
                        <div className="col-md-6 col-lg-6">
                            <div className={`${Stylo['form-container']} shadow p-4 rounded`}>
                                <img src="assets/images/logo.png" alt="Client" />
                                <h3 className="text-center mb-4">Sign In</h3>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control p-2" 
                                        id="username"
                                        name="email"
                                        value={email}
                                        onChange={handleInputChange}
                                        aria-describedby="usernameHelp"
                                        placeholder="Enter Email"
                                        required
                                    />
                                    <div className="text-danger">{emailError}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control p-2"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={handleInputChange}
                                        placeholder="Enter Password"
                                        required
                                    />
                                    <div className="text-danger">{passwordError}</div>
                                </div>
                                <div className="d-grid gap-2 mt-5">
                                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                                </div>
                                {successMessage && <div className="text-success">{successMessage}</div>} {/* Render success message */}
                                {errorMessage && <div className="text-danger">{errorMessage}</div>}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Login;
