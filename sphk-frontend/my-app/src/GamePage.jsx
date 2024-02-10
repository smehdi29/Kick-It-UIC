import React from 'react';
import './GamePage.css';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';

function GamePage({ upcomingGames, recentGames }){

    let { gameName } = useParams();
    const nonurlGameName = decodeURIComponent(gameName);
    let currGame = upcomingGames.find(game => game.name === nonurlGameName) || recentGames.find(game => game.name === nonurlGameName);
    if(!currGame){
        return (
            <div className = "gamePage">
                <PageHeader />
                <h2> Game not found </h2>
            </div>
        );
    }
    const { name, sport, date, time, teamSize, location } = currGame;

    return(
        <div className="gamePage">
            <PageHeader />
            <div className="gamePageContainer">
                <h1>{name}</h1>
                <div className="gameDetails">
                    <p><strong>Sport: </strong> {sport}</p>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Time:</strong> {time}</p>
                    <p><strong>Team Size:</strong> {teamSize}</p>
                    <p><strong>Location:</strong> {location}</p>
                </div>
            </div>

        </div>
    );
}

export default GamePage;