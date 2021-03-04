var displayResult = document.getElementById('#answer')
var scoreP1 = document.querySelector('#scorep1')
var scoreP2 = document.querySelector('#scorep2')

var tallyScores = [0,0]

var pictureSelection = new Array("images/rock.jpg","images/paper.jpg", "images/scissors.jpg")

//rock click
var rockBtn = document.querySelector("#rock")
  var rockImage = pictureSelection[0]
  var userPic = document.getElementById('userpic')
  rockBtn.addEventListener('click', (e) => {
  userPic.style.display='block';
  userPic.src = pictureSelection[0];
  randomImage();
} )

//paper click 
var paperBtn = document.querySelector("#paper")
  var paperImage = pictureSelection[1]
  var userPic = document.getElementById('userpic')
  paperBtn.addEventListener('click', (e) => {
  userPic.style.display='block';
  userPic.src = pictureSelection[1]
  randomImage();
} )

//scissors click
var scissorsBtn = document.querySelector("#scissors")
  var scissorsImage = pictureSelection[2]
  var scissorsPic = document.getElementById('userpic')
  scissorsBtn.addEventListener('click', (e) => {
  userPic.style.display='block';
  userPic.src = pictureSelection[2]
  randomImage();
} )

//function for img2 
function randomImage() { 
  //randomly select image from array
  var image2 = Math.floor(Math.random()* pictureSelection.length);
  //output image to DOM
  var robotArmPic = document.querySelector("#myPicture");robotArmPic.src = pictureSelection[image2];
  robotArmPic.style.display='block'
  document.querySelector('robotResult')
  var robotIndex = JSON.stringify(image2);
  console.log(robotIndex)
  return{
    robotIndex
    }
}


let robotChoice = randomImage();
//0 = Rock 1= Paper 2=Scissors



/*
//compare results from players
let result = checkWinner(userResult, robotResult)

if (result === 'myArm'){
  result += 'wins';
  tallyScores [0]++
}

if (result === 'robotArm'){
  result += 'wins';
  tallyScores [0]++
}

if(result === 'Draw'){
  results += 'Tie, play again'
}

//output scores tn DOM
scoreP1.innerHTML = `Player1: [`+tallyScores[0]+`] Player2 : [`+ tallyScores [1] +`]` ;

*/