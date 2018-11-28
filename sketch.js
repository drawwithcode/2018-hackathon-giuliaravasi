 var mySong;

 var secretImg;
 var faqImg;
 var lockImg;
 var pocketImg;
 var graveImg;
 var twoImg;
 var deadImg;

 var pllLogo;

 var time;

function preload(){
  mySong = loadSound('./assets/PLL_Intro.mp3');
  secretImg = loadImage('./assets/secret.svg');
  faqImg = loadImage('./assets/faq.svg');
  lockImg = loadImage('./assets/lock.svg');
  pocketImg = loadImage('./assets/pocket.svg');
  graveImg = loadImage('./assets/grave.svg');
  twoImg = loadImage('./assets/two.svg');
  deadImg = loadImage('./assets/dead.svg');
  pllLogo = loadImage('./assets/PLL_Logo2.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#580000');
  time = millis();

  fill(255);
  textStyle(NORMAL);
  textSize(22);
  textAlign(CENTER);
  textFont("Caveat");

  mySong.play();
}

function draw() {
  text("volume: 0", 50, 30);
  text("volume: max", width - 60, 30);

  mySong.amp(mouseX/width);

  if(millis() > time + 100){
  text("Got a           ", width/2, 55);
  image(secretImg, width/2 + 10, 20, secretImg.width/10, secretImg.height/10);
  }

  if(millis() > time + 1500) {
  text("Can you keep it     ", width/2, 105);
  image(faqImg, width/2 + 35, 70, faqImg.width/3, faqImg.height/3);
  }

  if(millis() > time + 2600) {
    text("Swear this one you'll save", width/2, 155);
  }

  if(millis() > time + 5500) {
    text("Better          it ", width/2, 205);
    image(lockImg, width/2 - 3, 175, lockImg.width/4, lockImg.height/4);
  }

  if(millis() > time + 6600) {
    text("In your       ", width/2, 255);
    image(pocketImg, width/2 + 20, 235, pocketImg.width/4, pocketImg.height/4)
  }

  if(millis() > time + 7800) {
    text("Taking this one to your          ", width/2, 305);
    image(graveImg, width/2 + 60, 275, graveImg.width/14, graveImg.height/14);
  }

  if(millis() > time + 10100) {
    text("If I show you then I know you", width/2, 355);
  }

  if(millis() > time + 13000) {
    text("Won't tell what I said", width/2, 405);
  }

  if(millis() > time + 15600) {
    text("Cause              can keep a secret", width/2, 455);
    image(twoImg, width/2 - 60, 425, twoImg.width/12, twoImg.height/12);
  }

  if(millis() > time + 18100) {
    text("If one of them is          ?", width/2, 505);
    image(deadImg, width/2 + 33, 475, deadImg.width/14, deadImg.height/14);
  }

  if(millis() > time + 21000) {
    image(pllLogo, width/2 - 220, height - 200, pllLogo.width/1.5, pllLogo.height/1.5);
  }
}


// INTRO LYRICS
// Got a secret
// Can you keep it?
// Swear this one you'll save
// Better lock it, in your pocket
// Taking this one to the grave
// If I show you then I know you
// Won't tell what I said
// 'Cause two can keep a secret
// If one of them is dead?
