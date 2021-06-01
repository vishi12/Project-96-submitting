var firebaseConfig = {
  apiKey: "AIzaSyD-da_CDvt2FFoNQOSEyCsHPIjPWswYhEI",
  authDomain: "project-46-6ed01.firebaseapp.com",
  databaseURL: "https://project-46-6ed01-default-rtdb.firebaseio.com",
  projectId: "project-46-6ed01",
  storageBucket: "project-46-6ed01.appspot.com",
  messagingSenderId: "809681368067",
  appId: "1:809681368067:web:a9eb8bd002e8a054f1ca36",
  measurementId: "G-GSD5615NVM"
};
// Initialize Firebase

user_name = localStorage.getItem("user_name");

room_name = localStorage.getItem("room_name");

document.getElementById("name_display").innerHTML = "Welcome " + user_name + "!";

function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
  console.log("Room Name - " + Room-names);
  row = "<div class='room name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHtml += row;
 });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}

function send(){
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});
}