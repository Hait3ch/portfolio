import React, { useRef, useState, useEffect } from "react";
import NavigationBar from "../components/Navbar";
import axios from "axios";
import { db } from "../firebase-config";
import {
  collection,
  orderBy,
  getDocs,
  query,
  where,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";

function TeamBuilder() {
  const [name, setName] = useState("");
  const [skillLevel, setSkillLevel] = useState(0);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);
  const [tgText, setTgText] = useState("");
  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);

  const usersRef = collection(db, "users");

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
    document.execCommand("copy");
    setCopySuccess("Copied!");
  }

  //ONE TIME GET FUNCTION
  async function getPlayers() {
    setLoading(true);
    try {
      const q = query(usersRef, orderBy("name"));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPlayers(items);
      setLoading(false);
    } catch (error) {
      console.error("Error getting players:", error);
      // For demo purposes, add some sample data
      setPlayers([
        { name: "John Doe", skillLevel: 8, uuid4: "demo-1" },
        { name: "Jane Smith", skillLevel: 7, uuid4: "demo-2" },
        { name: "Mike Johnson", skillLevel: 9, uuid4: "demo-3" },
      ]);
      setLoading(false);
    }
  }
  useEffect(() => {
    getPlayers();
    // eslint-disable-next-line
  }, []);

  // Add player
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (name !== "") {
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
          "https://us-central1-portfolio-2798d.cloudfunctions.net/addUser?" +
            "name=" +
            data.name +
            "&skillLevel=" +
            data.skillLevel +
            "&uuid4=" +
            data.uuid4
        )
        .then((res) => {
          console.log("res", res);
          setName("");
          setSkillLevel("");
          getPlayers();
          return;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // TODO: Make popup that ask for changes and update database
  async function editPlayer(updatedPlayer) {
    setLoading(true);
    try {
      const q = query(usersRef, where("name", "==", updatedPlayer.name));
      await getDocs(q);
      // setPlayers((prev) =>
      //   prev.map((element) => {
      //     if (element.id !== updatedPlayer.id) {
      //       return element;
      //     }
      //     return updatedPlayer;
      //   })
      // );
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  }

  //DELETE FUNCTION
  async function deletePlayer(player) {
    try {
      const q = query(usersRef, where("name", "==", player.name));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach(async (document) => {
        await deleteDoc(doc(db, "users", document.id));
      });

      //TODO: Fix this hack
      setPlayers((prev) =>
        prev.filter((element) => element.name !== player.name)
      );
      setSelectedPlayers((selectedPlayers) =>
        selectedPlayers.filter((selPlayer) => selPlayer.name !== player.name)
      );
    } catch (err) {
      console.error(err);
    }
  }

  const generateTeams = (event) => {
    event.preventDefault();

    let a = "";
    let b = "";
    setTeam1([]);
    setTeam2([]);
    // Sort with skill level

    selectedPlayers.sort(compare);

    setSelectedPlayers(selectedPlayers.sort((a, b) => compare(a, b)));

    for (let index = 0; index < selectedPlayers.length; index++) {
      if (index % 2 === 0) {
        a += selectedPlayers[index].name + "\n";
        setTeam1((team1) => [...team1, selectedPlayers[index]]);
      } else {
        b += selectedPlayers[index].name + "\n";
        setTeam2((team2) => [...team2, selectedPlayers[index]]);
      }

      setTgText(
        "Team 1 (Black shirt):\n" + a + "\nTeam 2 (White shirt):\n" + b
      );
    }
  };
  return (
    <div id="teambuilder" className="min-h-screen bg-gray-50">
      <NavigationBar />
      <div className="bg-black h-20"></div>
      <div className="container mx-auto px-4 py-8">
        <form className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Add New Player
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name:
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Ultimate player"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Skill Level:
                </label>
                <input
                  name="skillLevel"
                  type="number"
                  value={skillLevel}
                  onChange={(e) => setSkillLevel(e.target.value)}
                  className="input-field"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={(e) => handleSubmit(e)}
                className="btn-primary"
              >
                Add Player
              </button>
              <button
                type="button"
                onClick={(e) => generateTeams(e)}
                className="btn-secondary"
              >
                Generate Teams
              </button>
            </div>
          </div>

          {loading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Players Available */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Players Available
              </h3>
              <div className="space-y-3">
                {players.map((player) => (
                  <div
                    key={player.uuid4}
                    onClick={() => {
                      setSelectedPlayers((selectedPlayers) => [
                        ...selectedPlayers,
                        player,
                      ]);
                      setPlayers((players) =>
                        players.filter(
                          (selectedPlayer) =>
                            selectedPlayer.name !== player.name
                        )
                      );
                    }}
                    className="bg-gray-50 hover:bg-gray-100 p-3 rounded-lg cursor-pointer transition-colors duration-200 border border-gray-200"
                  >
                    <h4 className="font-medium text-gray-900">
                      {player.name}{" "}
                      <span className="text-primary-600">
                        ({player.skillLevel})
                      </span>
                    </h4>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          editPlayer({
                            name: player.name,
                            skillLevel: player.skillLevel,
                          });
                        }}
                        className="text-xs btn-secondary"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deletePlayer({
                            name: player.name,
                            skillLevel: player.skillLevel,
                          });
                        }}
                        className="text-xs btn-danger"
                      >
                        Del
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Players */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Selected Players
              </h3>
              <div className="space-y-3">
                {selectedPlayers.map((selectedPlayer) => (
                  <div
                    key={selectedPlayer.uuid4}
                    onClick={() => {
                      setPlayers((players) => [...players, selectedPlayer]);
                      setSelectedPlayers((selectedPlayers) =>
                        selectedPlayers.filter(
                          (player) => selectedPlayer.name !== player.name
                        )
                      );
                    }}
                    className="bg-blue-50 hover:bg-blue-100 p-3 rounded-lg cursor-pointer transition-colors duration-200 border border-blue-200"
                  >
                    <h4 className="font-medium text-gray-900">
                      {selectedPlayer.name}{" "}
                      <span className="text-blue-600">
                        ({selectedPlayer.skillLevel})
                      </span>
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Team 1 */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Team 1
              </h3>
              <div className="space-y-3">
                {team1.map((selectedPlayer) => (
                  <div
                    key={selectedPlayer.uuid4}
                    onClick={() => {
                      setPlayers((players) => [...players, selectedPlayer]);
                      setSelectedPlayers((selectedPlayers) =>
                        selectedPlayers.filter(
                          (player) => selectedPlayer.name !== player.name
                        )
                      );
                    }}
                    className="bg-green-50 hover:bg-green-100 p-3 rounded-lg cursor-pointer transition-colors duration-200 border border-green-200"
                  >
                    <h4 className="font-medium text-gray-900">
                      {selectedPlayer.name}{" "}
                      <span className="text-green-600">
                        ({selectedPlayer.skillLevel})
                      </span>
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Team 2 */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Team 2
              </h3>
              <div className="space-y-3">
                {team2.map((selectedPlayer) => (
                  <div
                    key={selectedPlayer.uuid4}
                    onClick={() => {
                      setPlayers((players) => [...players, selectedPlayer]);
                      setSelectedPlayers((selectedPlayers) =>
                        selectedPlayers.filter(
                          (player) => selectedPlayer.name !== player.name
                        )
                      );
                    }}
                    className="bg-purple-50 hover:bg-purple-100 p-3 rounded-lg cursor-pointer transition-colors duration-200 border border-purple-200"
                  >
                    <h4 className="font-medium text-gray-900">
                      {selectedPlayer.name}{" "}
                      <span className="text-purple-600">
                        ({selectedPlayer.skillLevel})
                      </span>
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text to Telegram */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Text to Telegram
            </h3>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              rows="15"
              ref={textAreaRef}
              value={tgText}
              onChange={(e) => setTgText(e.target.value)}
            />
            <div className="mt-4">
              <button className="w-full btn-primary" onClick={copyToClipboard}>
                Copy to Clipboard
              </button>
              {copySuccess && (
                <p className="text-green-600 text-sm mt-2 text-center">
                  {copySuccess}
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
  // }
}

export default TeamBuilder;
