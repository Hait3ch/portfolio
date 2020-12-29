import React, { useState, useEffect } from 'react';
import NavigationBar from '../components/Navbar';
import axios from 'axios';
import firebase from '../firebase-config';
import { v4 as uuid } from 'uuid';

function TeamBuilder() {
  const [name, setName] = useState('');
  const [skillLevel, setSkillLevel] = useState(0);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const ref = firebase.firestore().collection('users');
  // console.log(ref.get());

  //ONE TIME GET FUNCTION
  function getPlayers() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setPlayers(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, []);

  // why const and not function, should others be functions too
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== '') {
      const data = { name: name, skillLevel: skillLevel, uuid4: uuid() };
      await axios
        .post(
          'http://localhost:5001/portfolio-2798d/us-central1/addUser?' +
            'name=' +
            data.name +
            '&skillLevel=' +
            data.skillLevel +
            '&uuid4=' +
            data.uuid4
          // "https://us-central1-portfolio-2798d.cloudfunctions.net/addUser?" +
          //   "name=" +
          //   data.name +
          //   "&skillLevel=" +
          //   data.skillLevel
        )
        .then((res) => {
          console.log('res', res);
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div id='teambuilder'>
      <NavigationBar></NavigationBar>
      <div style={{ backgroundColor: 'blueviolet', height: 200 }}></div>

      <div>
        <form style={{ margin: 20 }}>
          <label>Add Player: </label>
          <label>
            Name:
            <input
              name='name'
              type='text'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label>
            Skill Level:
            <input
              name='skillLevel'
              type='number'
              value={skillLevel}
              onChange={(e) => {
                setSkillLevel(e.target.value);
              }}
            />
          </label>
          {/* <label>
              Number of Teams:
              <input
                name="numberOfTeams"
                type="number"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label> */}
          <input type='submit' value='Add' onClick={(e) => handleSubmit(e)} />
          {/* <input type="submit" value="Get" onClick={this.handleGetUsers} /> */}
          {/* {loading ? <h1>Loading...</h1> : <h1>Players loaded</h1>} */}
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <div style={{ width: '20%' }}>
              <h3>Players Available</h3>
              {players.map((player) => (
                <div
                  className='playerCard'
                  key={player.uuid4}
                  onClick={() => {
                    setSelectedPlayers((selectedPlayers) => [...selectedPlayers, player]);
                    // alert("✔️ Added player: " + player.name);
                    console.log(selectedPlayers);
                  }}
                >
                  <h4>{player.name}</h4>
                  <h4>{player.skillLevel}</h4>
                </div>
              ))}
            </div>

            {/* SELECTED PLAYERS */}
            <div style={{ width: '20%' }}>
              <h3>Selected Players</h3>
              {selectedPlayers.map((selectedPlayer) => (
                <div
                  className='playerCard'
                  key={selectedPlayer.uuid4}
                  onClick={() => {
                    console.log(selectedPlayers);
                    console.log(players);
                  }}
                >
                  <h3>{selectedPlayer.name}</h3>
                  <p>{selectedPlayer.skillLevel}</p>
                </div>
              ))}
            </div>
            <div style={{ width: '20%' }}>
              <h3>Team 1</h3>
            </div>
            <div style={{ width: '20%' }}>
              <h3>Team 2</h3>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // }
}

export default TeamBuilder;
