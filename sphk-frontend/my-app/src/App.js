import './App.css';
import MainPage from './MainPage.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JoinGamePage from './JoinGamePage';
import GamePage from './GamePage';

function App() {

  const upcomingGames = [{sport: 'Basketball', time: '9pm', date: '02-11-24', teamSize: '4', name: 'ezdubs', location: "ARC 250"}, {sport: 'Basketball', time: '9pm', date: '02-14-24', teamSize: '4', name: 'ezdubs2.0', location: "ARC 250"}];
  const recentGames = [{sport: 'Soccer', time: '10pm', date: '02-05-24', teamSize: '9', name: 'homies', location: "SES 250"}, {sport: 'Soccer', time: '10pm', date: '02-02-24', teamSize: '9', name: 'homies0.5', location: "SES 250"}];


  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='All'/>} />
        <Route path="/soccer" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Soccer'/>} />
        <Route path="/basketball" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Basketball'/>} />
        <Route path="/ping-pong" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Ping Pong'/>} />
        <Route path="/volleyball" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Volleyball'/>} />
        <Route path="/tennis" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Tennis'/>} />
        <Route path="/join-game" element={<JoinGamePage upcomingGames={upcomingGames} />} />
        <Route path="/game/:gameName" element={<GamePage upcomingGames={upcomingGames} recentGames={recentGames}/>} />

      </Routes>
    </Router>
  );
}

export default App;
