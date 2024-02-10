import React, { useState } from "react";
import './SignUp.css';
import BackgroundImage from './Login-Background.jpg';

const SignUp = () => {
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        skillLevel: ''
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        skillLevel: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        setSignupData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked ? value : '' : value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };

    const handleSignUp = () => {
        const requiredFields = ['firstName', 'lastName', 'email', 'password', 'age', 'skillLevel'];
        const newErrors = {};

        requiredFields.forEach(field => {
            if (!signupData[field]) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required.`;
            }
        });

        if (signupData.age && (signupData.age < 16 || signupData.age > 80)) {
            newErrors['age'] = 'Age must be between 16 and 80.';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Sign Up Data:", signupData);
        }
    };

    return (
        <div className="signup-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="signup-box">
                <h1>Create Account</h1>
                <form>
                    <div className="signup-form-text-field">
                        <label>
                            First Name:
                            <input type="text" name="firstName" value={signupData.firstName} onChange={handleInputChange} onClick={() => setErrors({ ...errors, firstName: '' })} />
                            <span className="error">{errors.firstName}</span>
                        </label>
                        <br />
                        <label>
                            Last Name:
                            <input type="text" name="lastName" value={signupData.lastName} onChange={handleInputChange} onClick={() => setErrors({ ...errors, lastName: '' })} />
                            <span className="error">{errors.lastName}</span>
                        </label>
                        <br />
                        <label>
                            Email:
                            <input type="email" name="email" value={signupData.email} onChange={handleInputChange} onClick={() => setErrors({ ...errors, email: '' })} />
                            <span className="error">{errors.email}</span>
                        </label>
                        <br />
                        <label>
                            Password:
                            <input type="password" name="password" value={signupData.password} onChange={handleInputChange} onClick={() => setErrors({ ...errors, password: '' })} />
                            <span className="error">{errors.password}</span>
                        </label>
                        <br />
                        <div className="age-container">
                            <label>
                                Age:
                            </label>
                            <input type="number" name="age" value={signupData.age} onChange={handleInputChange} style={{ width: '50px' }} onClick={() => setErrors({ ...errors, age: '' })} />
                            <span className="error">{errors.age}</span>
                        </div>
                        <br />
                        <div className="skill-level-container">
                            <div className="skill-label">
                                Skill level
                            </div>
                            <div className="checkbox-group">
                                <label>
                                    <span>Casual</span>
                                    <input
                                        type="checkbox"
                                        name="skillLevel"
                                        value="casual"
                                        checked={signupData.skillLevel === 'casual'}
                                        onChange={handleInputChange}
                                    />
                                </label>
                                <label>
                                    <span>Competitive</span>
                                    <input
                                        type="checkbox"
                                        name="skillLevel"
                                        value="competitive"
                                        checked={signupData.skillLevel === 'competitive'}
                                        onChange={handleInputChange}
                                    />
                                </label>
                            </div>
                            <span className="error">{errors.skillLevel}</span>
                        </div>
                    </div>
                    <div className="signup-button">
                        <button type="button" onClick={handleSignUp}>Create Account</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
