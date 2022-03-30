<!DOCTYPE html>
<html>
<head>
<title>W3.CSS Template</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
body,h1 {font-family: "Montserrat", sans-serif}
img {margin-bottom: -7px}
.w3-row-padding img {margin-bottom: 12px}
</style>
</head>
<body>

<!-- Sidebar -->
<nav class="w3-sidebar w3-black w3-animate-top w3-xxlarge" style="display:none;padding-top:150px" id="mySidebar">
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-black w3-xxlarge w3-padding w3-display-topright" style="padding:6px 24px">
    <i class="fa fa-remove"></i>
  </a>
  <div class="w3-bar-block w3-center">
    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black">About</a>
    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black">Photos</a>
    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black">Shop</a>
    <a href="#" class="w3-bar-item w3-button w3-text-grey w3-hover-black">Contact</a>
  </div>
</nav>

<!-- !PAGE CONTENT! -->
<div class="w3-content" style="max-width:1500px">

<!-- Header -->
<div class="w3-opacity">
<span class="w3-button w3-xxlarge w3-white w3-right" onclick="w3_open()"><i class="fa fa-bars"></i></span> 
<div class="w3-clear"></div>
<header class="w3-center w3-margin-bottom">
  <h1><b>LOGzIN</b></h1>
  <p><b>A Login managment site</b></p>
  <p class="w3-padding-16"><button class="w3-button w3-black" onclick="MakeIf()">Log in</button></p>
</header>
</div>

<!-- Photo Grid -->



<!-- End Page Content -->
</div>

<!-- Footer -->
<footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge" style="margin-top:128px"> 
  <i class="fa fa-facebook-official w3-hover-opacity"></i>
  <i class="fa fa-instagram w3-hover-opacity"></i>
  <i class="fa fa-snapchat w3-hover-opacity"></i>
  <i class="fa fa-pinterest-p w3-hover-opacity"></i>
  <i class="fa fa-twitter w3-hover-opacity"></i>
  <i class="fa fa-linkedin w3-hover-opacity"></i>
  <p class="w3-medium">Powered by <a href="https://github.com/Graphing-wiz" target="_blank" class="w3-hover-text-green">Some ridiculous graphing guy!</a></p>
</footer>
 <script>
 function randomNumber(yourArray){
 var x = Math.random();
var y = x*yourArray.length;
return y
}
 const myArray = ['https://www.google.com','https://www.twitter.com','https://www.w3schools.org','https://www.geeksforgeeks.org','https://www.csb.app','https://www.js.do','https://www.codepen.io','https://www.youtube.com','https://www.github.com','https://www.js.do/code/youareunsafe','https://www.js.do/code/gradecalculator','https://www.js.do/code/logzin-devmode'];
 

const names = [
'Mason',
'DEV',
];
const IDs = [
'Mason: 37430-M4AD-GA49AL',
'(Developer pass not allowed)',
];
function MakeID(){
var name = prompt('what is your name?');
if(name === 'DEV: 37430-M4AD-GA49AL'){
console.log('Hello Developer!');
for(i = 0; i<IDs.length; i++){
console.log(IDs[i]);
}
}else{
if(IDs.includes(name)){
alert('already a user');
}else{
var db = prompt('what is you date of birth seperated by \'-\'');
var bd = db.replace(/-/gi, '');
var date = parseFloat(bd);
var mb = prompt('what year was your mother born in?');
var m = parseFloat(mb);
var fb = prompt('what year was your father born in?');
var f = parseFloat(fb);
var sector1 = date + f*m;
var initals = prompt('what are your initials First,Middle,Last?');
const init = initals.split(/,/gi);
var childNum = prompt('what child number are you?');
var sector2 = init[0] + childNum + init[1] + init[2];
var state = prompt('what state were you born in?');
var house = prompt('what is your house number?');
var city = prompt('what city do you live in?');
var sector3 = state + house + city;
var compound = name + ': ' + sector1 + '-' + sector2 + '-' + sector3;
console.log(compound);
names.push(Name);
IDs.push(compoud);
}
}
}
var ttt = myArray[randomNumber(myArray)];
function MakeIf(){
var makeIf = confirm('do you allready have a passcode? ok = yes, cancel = no');
if(makeIf){
var id = prompt('id name and number');
if(IDs.includes(id)){
var webSite = prompt('Welccome User, what is the index of the website you wish to visit?');
var parsedSite = parseFloat(webSite);
window.open(myArray[parsedSite]);
}else{
alert('Incorrect, log into dev mode or try again');
}
}else{MakeID()};
}

// Toggle grid padding


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
</script>

</body>
</html>

