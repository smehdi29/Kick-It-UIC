import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PageHeader from './PageHeader';
import './JoinGamePage.css';

function JoinGamePage({ upcomingGames }) {
    const [selectedSport, setSelectedSport] = useState('All');
    const handleSportChange = (dropdownSelect) => {
        setSelectedSport(dropdownSelect.target.value);
    }
    const navigate = useNavigate();
    const goToGame = (game) => {
        let path = '/game/' + game;
        navigate(path);
    }

    const goCreate = () => {
        navigate('/createSesh');
    }


    let filteredGames = upcomingGames;
    if(selectedSport !== 'All'){
        filteredGames = upcomingGames.filter(game => game.sport === selectedSport)
    }
    return (
        <div className="joinGamePage">
            <PageHeader />
            <h2>Upcoming games</h2>
            <br></br>
            <select onChange={handleSportChange} className="sportFilterDropdown">
                <option value="All">All Sports</option>
                <option value="Soccer">Soccer</option>
                <option value="Basketball">Basketball</option>
                <option value="Ping Pong">Ping Pong</option>
                <option value="Tennis">Tennis</option>
                <option value="Volleyball">Volleyball</option>
            </select>
            <div className="gamesTableContainer">
                <table className="gamesTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Sport</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Team Size</th>
                            <th>Location</th>
                            <th>         </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredGames.map((game, index) => (
                            <tr key={index}>
                                <td className="gameNames" onClick={() => goToGame(game.name)}>{game.name}</td>
                                <td >{game.sport}</td>
                                <td>{game.date}</td>
                                <td>{game.time}</td>
                                <td>{game.teamSize}</td>
                                <td>{game.location}</td>
                                <td><button className="requestJoin">Queue Up!</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <br></br>
            <button className="newGame" onClick={goCreate}>+Add Game</button>
        </div>
    );
}

export default JoinGamePage;