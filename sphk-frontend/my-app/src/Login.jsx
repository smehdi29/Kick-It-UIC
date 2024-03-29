import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './Login.css';
import BackgroundImage from './Login-Background.jpg';
import Logo from './Logo_clear.png';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const valid = () => {
        const requiredFields = ['email', 'password'];
        const newErrors = {};

        setErrors(newErrors);

        if(Object.keys(newErrors).length === 0){
            navigate('/all');
        }
        navigate('/all');
    }


    return (
        <div className="login-container" style={{ backgroundImage: `url(${BackgroundImage})` }}>
            <div className="content-container">
                <div className="leftSideOfLogin">
                    <h1 className="kick-it-text">Kick it!</h1>
                    <img src={Logo} alt="Logo" className="logo" />
                </div>
                <div className="login-box-container">
                    <div className="login-box">
                        <form>
                            <div className="login-form-text-field">
                                <label>
                                    Username:
                                    <input type="text" name="username" value={loginData.username} onChange={handleInputChange} />
                                </label>
                                <br />
                                <label>
                                    Password:
                                    <input type="password" name="password" value={loginData.password} onChange={handleInputChange} />
                                </label>
                                <br />
                            </div>
                        </form>
                        <div className="login-button">
                            <button type="button" onClick={valid}>Login</button>
                        </div>
                        <div className="signup-link">
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
