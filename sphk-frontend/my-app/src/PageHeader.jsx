import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PageHeader.css';
import logoImage from './logo1.png';


function PageHeader() {

    const navigate = useNavigate();

    const goHome = () => {
        navigate('/all');
    }

    const goGames = () => {
        navigate('/join-game');
    }

    const filterGames = (sport) => {
        navigate('/'+sport);
    }

    const goFriends = () => {
        navigate('/friends');
    }

    const goAbout = () => {
        navigate('/aboutUs');
    }
    return (
        <div>
            <header className="header"> 
                <div className="navbarHeader">
                    <div className="leftSideNavBar" onClick={goHome}>
                        <img src={logoImage} alt="Logo" width="100" height="100" />
                        <h1 className="logo">Kick It!</h1>
                    </div>
                    <div className="navbar-links">
                        <button className="nav-button" onClick={goAbout}>About Us</button>
                        <button className="nav-button" onClick={goFriends}>Friends</button>
                        <button className="nav-button" onClick={goGames}>Games</button>
                    </div>
                </div>
            </header> 
            <nav className="navbar">
                <button onClick={() => filterGames('all')} >All</button>
                <button onClick={() => filterGames('soccer')}>Soccer</button>
                <button onClick={() => filterGames('basketball')}>Basketball</button>
                <button onClick={() => filterGames('ping-pong')}>Ping Pong</button>
                <button onClick={() => filterGames('volleyball')}>Volleyball</button>
                <button onClick={() => filterGames('tennis')}>Tennis</button>
            </nav>
        </div>
    );
}

export default PageHeader;