import React, { useRef, useState, useEffect } from 'react';
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
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [tgText, setTgText] = useState('');
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const ref = firebase.firestore().collection('users');

  function compare(a, b) {
    if (parseInt(a.skillLevel) < parseInt(b.skillLevel)) {
      return -1;
    }
    if (parseInt(a.skillLevel) > parseInt(b.skillLevel)) {
      return 1;
    }
    return 0;
  }

  function copyToClipboard(e) {
    e.preventDefault();
    textAreaRef.current.select();
    document.execCommand('copy');
    setCopySuccess('Copied!');
  }

  //ONE TIME GET FUNCTION
  function getPlayers() {
    setLoading(true);
    ref
      .orderBy('name')
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setPlayers(items);
        setLoading(false);
      });
  }
  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== '') {
      const data = { name: name, skillLevel: skillLevel, uuid4: uuid() };
      await axios
        .post(
          // 'http://localhost:5001/portfolio-2798d/us-central1/addUser?' +
          //   'name=' +
          //   data.name +
          //   '&skillLevel=' +
          //   data.skillLevel +
          //   '&uuid4=' +
          //   data.uuid4
          'https://us-central1-portfolio-2798d.cloudfunctions.net/addUser?' +
            'name=' +
            data.name +
            '&skillLevel=' +
            data.skillLevel +
            '&uuid4=' +
            data.uuid4
        )
        .then((res) => {
          console.log('res', res);
          setName('');
          setSkillLevel('');
          getPlayers();
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const generateTeams = (event) => {
    event.preventDefault();

    let a = '';
    let b = '';
    setTeam1([]);
    setTeam2([]);
    // Sort with skill level

    console.log(selectedPlayers);

    selectedPlayers.sort(compare);

    setSelectedPlayers(selectedPlayers.sort((a, b) => compare(a, b)));

    console.log(selectedPlayers);

    for (let index = 0; index < selectedPlayers.length; index++) {
      if (index % 2 === 0) {
        a += selectedPlayers[index].name + '\n';
        setTeam1((team1) => [...team1, selectedPlayers[index]]);
      } else {
        b += selectedPlayers[index].name + '\n';
        setTeam2((team2) => [...team2, selectedPlayers[index]]);
      }

      setTgText('Team 1 (Black shirt):\n' + a + '\nTeam 2 (White shirt):\n' + b);
    }
  };
  return (
    <div id='teambuilder'>
      <NavigationBar></NavigationBar>
      <div style={{ backgroundColor: 'black', height: 80 }}></div>
      <div>
        <form style={{ margin: 20 }}>
          <label>Add Player: </label>
          <label>
            Name:
            <input
              name='name'
              type='text'
              placeholder='Ultimate player'
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
          <input type='submit' value='Generate' onClick={(e) => generateTeams(e)} />

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
                    setPlayers((players) => players.filter((selectedPlayer) => selectedPlayer.name !== player.name));
                  }}
                >
                  <h4>
                    {player.name} {player.skillLevel}
                  </h4>
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
                    setPlayers((players) => [...players, selectedPlayer]); // adds selected player back to available list
                    setSelectedPlayers((selectedPlayers) => selectedPlayers.filter((player) => selectedPlayer.name !== player.name)); // delete from selected player list
                  }}
                >
                  <h4>
                    {selectedPlayer.name} {selectedPlayer.skillLevel}
                  </h4>
                </div>
              ))}
            </div>
            <div style={{ width: '20%' }}>
              <h3>Team 1</h3>
              {team1.map((selectedPlayer) => (
                <div
                  className='playerCard'
                  key={selectedPlayer.uuid4}
                  onClick={() => {
                    setPlayers((players) => [...players, selectedPlayer]); // adds selected player back to available list
                    setSelectedPlayers((selectedPlayers) => selectedPlayers.filter((player) => selectedPlayer.name !== player.name)); // delete from selected player list
                  }}
                >
                  <h4>
                    {selectedPlayer.name} {selectedPlayer.skillLevel}
                  </h4>
                </div>
              ))}
            </div>
            <div style={{ width: '20%' }}>
              <h3>Team 2</h3>
              {team2.map((selectedPlayer) => (
                <div
                  className='playerCard'
                  key={selectedPlayer.uuid4}
                  onClick={() => {
                    setPlayers((players) => [...players, selectedPlayer]); // adds selected player back to available list
                    setSelectedPlayers((selectedPlayers) => selectedPlayers.filter((player) => selectedPlayer.name !== player.name)); // delete from selected player list
                  }}
                >
                  <h4>
                    {selectedPlayer.name} {selectedPlayer.skillLevel}
                  </h4>
                </div>
              ))}
            </div>
            <div style={{ width: '20%' }}>
              <h3>Text to Telegram</h3>
              <textarea style={{ width: '100%' }} rows='15' ref={textAreaRef} value={tgText} onChange={(e) => setTgText(e.target.value)} />
              <button style={{ width: '100%' }} onClick={copyToClipboard}>
                Copy
              </button>
              {copySuccess}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // }
}

export default TeamBuilder;
