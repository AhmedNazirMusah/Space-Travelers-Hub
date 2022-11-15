import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/navbar';
import Rockets from './components/rockets';
import Missions from './components/missions';
import Profile from './components/myProfile';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/myprofile" element={<Profile />} />
        </Routes>
      </Provider>
    </div>

  );
}

export default App;
