import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.jsx';
import JoinGamePage from './JoinGamePage';
import GamePage from './GamePage';
import FriendsPage from './FriendsPage';
import Login from './Login';
import AboutPage from './AboutPage';
import SignUp from './SignUp';
import CreateSesh from './CreateSesh';


function App() {

  const upcomingGames = [{sport: 'Basketball', time: '9pm', date: '02-11-24', teamSize: '4', name: 'ezdubs', location: "SES 250"}, 
    {sport: 'Basketball', time: '9pm', date: '02-14-24', teamSize: '4', name: 'ezdubs2.0', location: "ARC 250"},
    {sport: 'Soccer', time: '9pm', date: '02-16-24', teamSize: '4', name: 'ezdubs3.0', location: "REC 250"}
  ];
  const recentGames = [{sport: 'Soccer', time: '10pm', date: '02-05-24', teamSize: '9', name: 'homies', location: "SES 250"}, {sport: 'Soccer', time: '10pm', date: '02-02-24', teamSize: '9', name: 'homies0.5', location: "SES 250"}];
  const users = [{profilePicture: '1', firstName: 'syed', lastName: 'shaban', age: '17', skillLevel: 'false'}];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/all" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='All'/>} />
        <Route path="/soccer" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Soccer'/>} />
        <Route path="/basketball" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Basketball'/>} />
        <Route path="/ping-pong" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Ping Pong'/>} />
        <Route path="/volleyball" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Volleyball'/>} />
        <Route path="/tennis" element={<MainPage upcomingGames={upcomingGames} recentGames={recentGames} sport='Tennis'/>} />
        <Route path="/join-game" element={<JoinGamePage upcomingGames={upcomingGames} />} />
        <Route path="/game/:gameName" element={<GamePage upcomingGames={upcomingGames} recentGames={recentGames} users={users}/>} />
        <Route path="/friends" element={<FriendsPage /> } />
        <Route path="/createSesh" element={<CreateSesh users={users} />} />
        <Route path="/aboutUs" element={<AboutPage /> } />
      </Routes>
    </Router>
  );
};

export default App;
