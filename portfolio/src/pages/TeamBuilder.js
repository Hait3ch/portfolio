import React, { useState, useEffect } from "react";
import NavigationBar from "../components/Navbar";
import axios from "axios";
import firebase from "../firebase-config";

function TeamBuilder() {
  const [name, setName] = useState("");
  const [skillLevel, setSkillLevel] = useState(0);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("users");
  // console.log(ref.get());

  //ONE TIME GET FUNCTION
  function getPlayers() {
    setLoading(true);
    console.log("here1");
    ref.get().then((item) => {
      console.log("here2");
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
  const /*async*/ handleSubmit = async (event) => {
      // event.preventDefault();

      if (name !== "") {
        const data = { name: name, skillLevel: skillLevel };

        await axios
          .post(
            "http://localhost:5001/portfolio-2798d/us-central1/addUser?" +
              "name=" +
              data.name +
              "&skillLevel=" +
              data.skillLevel
            // "https://us-central1-portfolio-2798d.cloudfunctions.net/addUser?" +
            //   "name=" +
            //   data.name +
            //   "&skillLevel=" +
            //   data.skillLevel
          )
          .then((res) => {
            console.log("res", res);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

  // function /*async */ handleGetUsers(event) {
  //   event.preventDefault();

  //   console.log("getting users");

  //   await axios
  //     // .get("https://us-central1-portfolio-2798d.cloudfunctions.net/getUsers")
  //     .get("http://localhost:5001/portfolio-2798d/us-central1/getUsers")
  //     .then((res) => {
  //       console.log("Test get users:" + res);
  //       console.log(res);
  //     })
  //     .catch((e) => console.log("Error" + e));
  // }

  // render() {
  return (
    <div id="teambuilder">
      <NavigationBar></NavigationBar>
      <div style={{ backgroundColor: "blueviolet", height: 200 }}></div>

      <div>
        <form style={{ margin: 20 }}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <label>
            Skill Level:
            <input
              name="skillLevel"
              type="number"
              value={skillLevel}
              onChange={(e) => {
                setSkillLevel(e.target.skillLevel); //TODO
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
          <input type="submit" value="Add" onClick={handleSubmit()} />

          {/* <input type="submit" value="Get" onClick={this.handleGetUsers} /> */}

          {loading ? <h1>Loading...</h1> : <h1>Players loaded</h1>}

          {players.map((player) => (
            <div className="playerCard" key={player.id}>
              <h3>{player.name}</h3>
              <p>{player.skillLevel}</p>
            </div>
          ))}
        </form>
      </div>

      <p>Testing</p>
    </div>
  );
  // }
}

export default TeamBuilder;
