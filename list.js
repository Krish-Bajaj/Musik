const featureList = document.getElementById("feature-list");
const songtrack = document.getElementById("songtrack")
const artist = document.getElementById("artist")
const danceability = document.getElementById("danceability")
const energy = document.getElementById("energy")
const acousticness = document.getElementById("acousticness")
const liveness = document.getElementById("liveness")
const target = document.getElementById("target")
const valence = document.getElementById("valence")
const instrumentalness = document.getElementById("instrumentalness")
const speechiness = document.getElementById("speechiness")
const sections = document.getElementById("sections")
const mode = document.getElementById("mode")
featureList.style.display = "none";

function getMusicData(song) {
  // e.preventDefault()
  featureList.style.display = "block";

  let query = {
    query: song,
  };
  let data = {} 
  fetch("http://127.0.0.1:5000/historical", {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      songtrack.innerText = json["Song Track"];
      artist.innerText = json["Artist"];
      danceability.innerText = json["danceability"];
      energy.innerText = json["energy"];
      acousticness.innerText = json["acousticness"];
      liveness.innerText = json["liveness"];
      target.innerText = json["target"];
      valence.innerText = json["valence"];
      instrumentalness.innerText = json["instrumentalness"];
      speechiness.innerText = json["speechiness"];
      sections.innerText = json["sections"];
      mode.innerText = json["mode"];
    });
}
