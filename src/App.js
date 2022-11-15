import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Profile from './components/myProfile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Missions />} />
        <Route exact path="/myprofile" element={<Profile />} />
      </Routes>
    </div>

  );
}

export default App;
