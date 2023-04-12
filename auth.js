// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//     apiKey: "AIzaSyDerlqtYFRzbF178SiJ-rogesSvZaUX2zY",
//     authDomain: "eagle-airways.firebaseapp.com",
//     projectId: "eagle-airways",
//     storageBucket: "eagle-airways.appspot.com",
//     messagingSenderId: "599319887318",
//     appId: "1:599319887318:web:77a1a5f1c4d8db851af877",
//     databaseURL: "https://eagle-airways-default-rtdb.firebaseio.com/",
//     measurementId: "G-Z81YYS1ZSW",
//   };

const firebaseConfig = {
  apiKey: "AIzaSyDmMNknYhlsDLCue5K-takwgGK11h-NUyQ",
  authDomain: "musik-7bfe9.firebaseapp.com",
  projectId: "musik-7bfe9",
  storageBucket: "musik-7bfe9.appspot.com",
  messagingSenderId: "481293751439",
  appId: "1:481293751439:web:c1afcd90f33aa1d1f40cfa",
  databaseURL: "https://musik-7bfe9-default-rtdb.firebaseio.com/",
  measurementId: "G-61RE9DBFCN",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var auth = firebase.auth();
var db = firebase.firestore();
var database = firebase.database();
var functions = firebase.functions();

// Global variable for users uid
var user_uid = "";
var email = "";
var password = "";
var setError = "";

// Data extraction stuff
var user_flight_info = "";
var user_departure = "";
var user_destination = "";
var user_departure_date = "";
var user_return_date = "";
var user_no_of_adults = "";

var user_adult_salutation = "";
var user_adult_first_name = "";
var user_adult_last_name = "";
var user_adult_code = "";
var user_adult_number = "";
var user_adult_email = "";

// // ------------------------------------------- onAuthStateChanged ---------------------------------------------

// // setting the uid of the current user
// firebase.auth().onAuthStateChanged((user) => {
//   if (!setError && alertText) {
//     alertText.style.display = "none";
//   } else if (setError && alertText) {
//     alertText.style.display = "none";
//   }

//   if (user) {
//     user_uid = user.uid;
//     console.log(user_uid);
//     if (navbarBookingButton) {
//       navbarBookingButton.style.display = "block";
//     }
//     if (navbarItineraryButton) {
//       navbarItineraryButton.style.display = "block";
//     }
//     if (navbarLogoutButton) {
//       navbarLogoutButton.style.display = "block";
//     }
//     if (navbarSignupButton) {
//       navbarSignupButton.style.display = "none";
//     }
//     if (navbarLoginButton) {
//       navbarLoginButton.style.display = "none";
//     }
//     if (document.getElementById("navbar-email-display")) {
//       document.getElementById("navbar-email-display").innerHTML = user.email;
//     }
//   } else {
//     if (navbarBookingButton) {
//       navbarBookingButton.style.display = "none";
//     }
//     if (navbarItineraryButton) {
//       navbarItineraryButton.style.display = "none";
//     }
//     if (navbarLogoutButton) {
//       navbarLogoutButton.style.display = "none";
//     }
//     if (navbarSignupButton) {
//       navbarSignupButton.style.display = "block";
//     }
//     if (navbarLoginButton) {
//       navbarLoginButton.style.display = "block";
//     }
//     document.getElementById("navbar-email-display").innerHTML = "";
//   }
//   // checks whether the browser ends with itinerary and then calls the function wich displays the data
//   if (window.location.href.endsWith("itinerary.html")) {
//     accessData();
//   }
// });

// const navbarBookingButton = document.querySelector("#navbar-booking-button");
// const navbarItineraryButton = document.querySelector(
//   "#navbar-itinerary-button"
// );
// const alertText = document.querySelector("#alert-box");

// const navbarLogoutButton = document.querySelector("#navbar-logout-button");
// const navbarSignupButton = document.querySelector("#navbar-signup-button");
// const navbarLoginButton = document.querySelector("#navbar-login-button");
// if (navbarLogoutButton) {
//   navbarLogoutButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     logoutUser();
//   });
// }

// // ------------------------------------------- itinerary.html ---------------------------------------------

// // Code to get data back and display it on the flight details screen
// function accessData() {
//   var databaseRef = database.ref(user_uid);

//   // Gets the data as an object back
//   databaseRef.on(
//     "value",
//     function (snapshot) {
//       data = snapshot.val();
//       var first_name = data.user_adult_first_name;
//       var flight_info = data.user_flight_info;
//       var departure = data.user_departure;
//       var destination = data.user_destination;
//       var departure_date = data.user_departure_date;
//       var return_date = data.user_return_date;
//       var no_of_adults = data.user_no_of_adults;

//       // some regex to remove the airport name and keep only the city
//       console.log(departure);
//       console.log(departure.match(/[a-zA-Z]*/g, "")[0]);

//       departure = departure.match(/[a-zA-Z]*/g, "")[0];
//       destination = destination.match(/[a-zA-Z]*/g, "")[0];
//       // console.log(departure.replaceAll(/[\s][\S][a-zA-Z0-9][\s]*/g, ''))
//       // console.log(departure.replaceAll(/[\s\S[a-zA-Z0-9]*\s[a-zA-Z0-9]*\S[a-zA-Z0-9]*\S+]/g, ''))
//       // console.log(departure.replaceAll(/[^a-z0-9+]/g, ''))

//       var departure_content = "";
//       departure_content += "<td>" + first_name + "</td>";
//       departure_content += "<td>" + flight_info + "</td>";
//       departure_content += "<td>" + 4091 + "</td>";
//       departure_content += "<td>" + departure + "</td>";
//       departure_content += "<td>" + destination + "</td>";
//       departure_content += "<td>" + departure_date + "</td>";

//       var return_content = "";
//       return_content += "<td>" + first_name + "</td>";
//       return_content += "<td>" + flight_info + "</td>";
//       return_content += "<td>" + 4092 + "</td>";
//       return_content += "<td>" + destination + "</td>";
//       return_content += "<td>" + departure + "</td>";
//       return_content += "<td>" + return_date + "</td>";

//       console.log(snapshot.val());
//       $("#user-table-departure").append(departure_content);
//       $("#user-table-return").append(return_content);

//       // Dynamic value for payment
//       document.getElementById("total-payment").innerHTML = `${
//         50000 * parseInt(no_of_adults)
//       }`;
//     },
//     function (errorObject) {
//       console.log("The read failed: " + errorObject.code);
//     }
//   );
// }

// // ------------------------------------------- booking2.html ---------------------------------------------

// function calcValue2() {
//   user_adult_salutation = document.getElementById(
//     "user-adult-salutation"
//   ).value;
//   user_adult_first_name = document.getElementById(
//     "user-adult-first-name"
//   ).value;
//   user_adult_last_name = document.getElementById("user-adult-last-name").value;
//   user_adult_code = document.getElementById("user-adult-code").value;
//   user_adult_number = document.getElementById("user-adult-number").value;
//   user_adult_email = document.getElementById("user-adult-email").value;

//   writeUserData2();
// }
// // sending data to firebase with UID as the key
// function writeUserData2() {
//   firebase.database().ref(user_uid).update({
//     user_adult_salutation: user_adult_salutation,
//     user_adult_first_name: user_adult_first_name,
//     user_adult_last_name: user_adult_last_name,
//     user_adult_code: user_adult_code,
//     user_adult_number: user_adult_number,
//     user_adult_email: user_adult_email,
//   });
// }
// const booking2Btn = document.querySelector("#booking2-button");
// if (booking2Btn) {
//   booking2Btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     console.log(user_uid);
//     calcValue2();

//     // needed the timeout function because otherwise the redirection was happening way before data was getting sent
//     setTimeout(function () {
//       // location.href = "http://127.0.0.1:5500/itinerary.html";
//       location.href = "https://eagle-airways.netlify.app/itinerary.html";
//     }, 2000);
//   });
// }

// // ------------------------------------------- booking.html ---------------------------------------------

// // Sending booking.html data to firebase
// function writeUserData() {
//   console.log(user_uid);
//   firebase.database().ref(user_uid).set({
//     user_flight_info: user_flight_info,
//     user_departure: user_departure,
//     user_destination: user_destination,
//     user_departure_date: user_departure_date,
//     user_return_date: user_return_date,
//     user_no_of_adults: user_no_of_adults,
//   });
// }
// // Accessing data
// function calcValue() {
//   user_flight_info = document.getElementById("user-flight-info").value;
//   user_departure = document.getElementById("user-departure").value;
//   user_destination = document.getElementById("user-destination").value;
//   user_departure_date = document.getElementById("user-departure-date").value;
//   user_return_date = document.getElementById("user-return-date").value;
//   user_no_of_adults = document.getElementById("user-no-of-adults").value;

//   // Displaying the data collected from the top
//   // document.getElementById("user_display").innerHTML = user_details;
//   writeUserData();
// }
// // Button to send data - booking.html
// const booking1Btn = document.querySelector("#booking1-button");
// if (booking1Btn) {
//   booking1Btn.addEventListener("click", (e) => {
//     e.preventDefault();

//     console.log(user_uid);
//     calcValue();

//     // needed the timeout function because otherwise the redirection was happening way before data was getting sent
//     setTimeout(function () {
//       // location.href = "http://127.0.0.1:5500/booking2.html";
//       location.href = "https://eagle-airways.netlify.app/booking2.html";
//     }, 2000);
//   });
// }

// ---------------------------------------------------- prediction.html --------------------------------------------
// Getting the access token from spotify
const getToken = async () => {
  // getting the access token
  clientId = "a7513821a0584e2f8fd2f31f16f686e1";
  clientSecret = "979dd225cd184e269ecdc810fab66d80";
  let result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  let data = await result.json();
  return data.access_token;
};

// getting the songs features
const predBlock = document.querySelector("#pred-block");
const predText = document.querySelector("#pred-output");
const pred1 = document.querySelector("#pred1");
const pred2 = document.querySelector("#pred2");
const pred3 = document.querySelector("#pred3");
const pred4 = document.querySelector("#pred4");
const pred5 = document.querySelector("#pred5");
const pred6 = document.querySelector("#pred6");
const pred7 = document.querySelector("#pred7");
const getFeatures = async (id) => {
  const access_token = await getToken();
  //   6Knv6wdA0luoMUuuoYi2i1
  result = await fetch("https://api.spotify.com/v1/audio-features/" + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + access_token,
    },
  });
  data = await result.json();

  const query = {
    data: data,
  };

  fetch("http://127.0.0.1:5000/", {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      predBlock.style.display = "block";
      if (json["pred"] === "0") {
        predText.innerHTML = "Flop!";
      } else {
        predText.innerHTML = "Hit!";
      }
      console.log(json);
    });

    console.log(data)
    pred1.innerHTML = data["acousticness"];
    pred2.innerHTML = data["danceability"];
    pred3.innerHTML = data["energy"];
    pred4.innerHTML = data["loudness"];
    pred5.innerHTML = data["instrumentalness"];
    pred6.innerHTML = data["tempo"];
    pred7.innerHTML = data["valence"];
};

const predictBtn = document.querySelector("#predict-btn");
if (predictBtn) {
  predictBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("here");

    id = document.getElementById("spotify-song-id").value;
    console.log("id", id);
    const data = await getFeatures(id);
  });
}

// ---------------------------------------------------- Authentication --------------------------------------------

// Creating a user
const signUpBtn = document.querySelector("#signup-btn");
if (signUpBtn) {
  signUpBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    // // const query = {
    // //   query: "On The Hotline",
    // // };

    // const data = await getFeatures();
    // const query = {
    //   data: data,
    // };

    // fetch("http://127.0.0.1:5000/", {
    //   method: "POST",
    //   body: JSON.stringify(query),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

    email = document.getElementById("user-email-signup").value;
    password = document.getElementById("user-password-signup").value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        // setting error message
        setError = error.message;
        console.log(setError);
        alertText.style.display = "block";
        alertText.innerHTML = setError;
      });
    console.log("User created!");

    // const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    // const alert = (message, type) => {
    //   const wrapper = document.createElement("div");
    //   wrapper.innerHTML = [
    //     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    //     `   <div>${message}</div>`,
    //     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label= "Close" ></button>',
    //     "</div>",
    //   ].join("");

    //   alertPlaceholder.append(wrapper);
    // };

    // alert("Successfully signed up!", "success");
  });
}

// Logging out the user
function logoutUser() {
  auth.signOut();
  console.log("User logged out!");
}

// Logging in the user
const loginBtn = document.querySelector("#login-btn");
if (loginBtn) {
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    email = document.getElementById("user-email-login").value;
    password = document.getElementById("user-password-login").value;
    console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        console.log("User logged in!");
      })
      .catch((error) => {
        // setting error message
        setError = error.message;
        console.log(setError);
        alertText.style.display = "block";
        alertText.innerHTML = setError;
      });
  });
}
