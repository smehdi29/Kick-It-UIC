import React from 'react';
import './GamePage.css';
import { useParams } from 'react-router-dom';
import PageHeader from './PageHeader';
import Arc from './arc.jpg';
import Rec from './rec.jpg';
import Ses from './ses.jpg';
import one from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';
import seven from './7.png';

function GamePage({ upcomingGames, recentGames, users }){

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


    const getProfilePicture = (user) => {
        switch(user.profilePicture){
            case '1':
                return one;
            case '2':
                return two;
            case '3':
                return three;
            case '4':
                return four;
            case '5':
                return five;
            case '6':
                return six;
            default:
                return seven;
        }
    }
    const { name, sport, date, time, teamSize, location } = currGame;

    let locImg = Arc;
    if(currGame.location.toLowerCase().includes('arc')){
        locImg = Arc;
    } else if(currGame.location.toLowerCase().includes('rec')){
        locImg = Rec;
    } else if(currGame.location.toLowerCase().includes('ses')){
        locImg = Ses;
    }
    
    const getSkillLevel = (user) => {
        return user ? 'Competitive' : 'Casual';
    }
    return(
        <div className="gamePage">
            <PageHeader />
            <div className="gamePageContainer">
                <h1>{name}</h1>
                <img src={locImg} className="locImg" alt="location"/>
                <div className="gameDetails">
                    <p><strong>Sport: </strong> {sport}</p>
                    <p><strong>Date:</strong> {date}</p>
                    <p><strong>Time:</strong> {time}</p>
                    <p><strong>Team Size:</strong> {teamSize}</p>
                    <p><strong>Location:</strong> {location}</p>
                </div>
                <div className="gameTableContainer">
                        <table className="gameTable">
                            <thead>
                                <tr>
                                    <th>    </th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Skill Level</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={index}  className="userList">
                                        <td><img src={getProfilePicture(user)} alt="profilePic" className="proPic" /></td>
                                        <td>{user.firstName}</td>
                                        <td>{user.age}</td>
                                        <td> {getSkillLevel(user)} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>

        </div>
    );
}

export default GamePage;