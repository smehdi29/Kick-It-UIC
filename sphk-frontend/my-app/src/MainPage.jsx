import React, {useState} from 'react';
import './MainPage.css';
import Calendar from './Calendar.jsx';
import PageHeader from './PageHeader.jsx';
import { useNavigate } from 'react-router-dom';


function MainPage({upcomingGames, recentGames, sport}) {

    const navigate = useNavigate();
    const selectedUpcoming = upcomingGames.filter(game => game.sport === sport || sport === 'All');
    const selectedRecent = recentGames.filter(game => game.sport === sport || sport === 'All');

    const goToGame = (game) => {
        let path = '/game/' + game.name;
        navigate(path);
    }

    const joinGame = () => {
        navigate('/join-game');
    };

    return (
        <div className="mainPageContent">
            <PageHeader />
            <main className="mainContent">
                <div className="layoutContainer">
                    <div className="gamesContainer">
                        <h2>Upcoming Games</h2>
                        <div className="tableContainer">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Sport</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Team Size</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedUpcoming.map((game, index) => (
                                        <tr key={index} onClick={() => goToGame(game)} className="upcomingClicker">
                                            <td>{game.name}</td>
                                            <td>{game.sport}</td>
                                            <td>{game.date}</td>
                                            <td>{game.time}</td>
                                            <td>{game.teamSize}</td>
                                            <td>{game.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2>Recent Games</h2>
                        <div className="tableContainer">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Sport</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Team Size</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedRecent.map((game, index) => (
                                        <tr key={index}>
                                            <td>{game.name}</td>
                                            <td>{game.sport}</td>
                                            <td>{game.date}</td>
                                            <td>{game.time}</td>
                                            <td>{game.teamSize}</td>
                                            <td>{game.location}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="calendarContainer">
                        <div className="calendarHeader">
                            <h2>Game Calendar</h2>
                            <button className="addGameButton">+Add Game</button>
                        </div>
                        <Calendar upcomingGames={upcomingGames} recentGames={recentGames} />
                    </div>
                    <br /><br />
                </div>
                <br /><br />
                <button className="joinGameButton" onClick={joinGame}>Join a Game!</button>

            </main>
        </div>
    );
}

export default MainPage;
