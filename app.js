var button = document.querySelector("#button")
var pictures = [
  {
    text: "rock",
    img: "rock.jpg"
  },
  {
    text: "paper",
    img: "paper.jpg"
  },
  {
    text: "scrissors",
    img: "scissors.jpg"
  }
];

button.addEventListener('click',(e) => {
  e.preventDefault();
 randomChoice();
 assignImage();
 mapPictures();
})

function randomChoice() {  
var image1 = pictures[Math.floor(Math.random()* pictures.length)];

var image2 = pictures[Math.floor(Math.random()* pictures.length)];

  return {
    image1, image2
    }
}

function assignImage () {
let {image1, image2} = randomChoice();
document.querySelector("#img1").innerHTML =  
'<img src="' + image1.img + '" width="250" height="250">' + '<p>' + image1.text + '</p>'  ;

document.querySelector("#img2").innerHTML =  
  '<img src="' + image2.img + '" width="250" height="250">' + '<p>' + image2.text + '</p>'  ;
}

function mapPictures() {

  const keyArray = Object.keys(pictures)

  for (const key of keyArray){
    console.log(key)
  }
 
//0 = rock, 1 = paper, 2=scissors 
//console.log(pictures[val]);
  
}







