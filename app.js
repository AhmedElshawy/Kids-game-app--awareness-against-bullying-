window.onload = (ev) => {
  setTimeout(() => {
    document.querySelector(".question-card").classList.add("sliding-effect");
    let myMessage = "Hello Kids!";
    let messageContainer = document.getElementById("message");
    live_writing(myMessage, messageContainer);
  }, 1500);

  let loader = document.getElementById("loader");
  setTimeout(() => {
    loader.style.display = "none";
  }, 1000);
};

function live_writing(message, messageContainer) {
  let i = 0;
  let timer = setInterval(() => {
    messageContainer.innerHTML += message[i];
    i++;
    if (i >= message.length) {
      clearInterval(timer);
    }
  }, 100);
}

//auios
let titleAudios = document.querySelectorAll(".title");
let audiosA1 = document.querySelectorAll(".a1");

for (let i = 0; i < titleAudios.length; i++) {
  titleAudios[i].addEventListener("click", (ev) => {
    audiosA1[i].play();
  });
}

let titleAudios2 = document.querySelectorAll(".title2");
//console.log(titleAudios2);
for (let i = 0; i < titleAudios2.length; i++) {
  titleAudios2[i].addEventListener("click", (ev) => {
    audiosA1[i].play();
  });
}

let titleAudios3 = document.querySelectorAll(".title3");
let audiosA2 = document.querySelectorAll(".a2");
for (let i = 0; i < titleAudios3.length; i++) {
  titleAudios3[i].addEventListener("click", (ev) => {
    audiosA2[i].play();
  });
}

let titleAudios4 = document.querySelectorAll(".title4");
for (let i = 0; i < titleAudios4.length; i++) {
  titleAudios4[i].addEventListener("click", (ev) => {
    audiosA2[i].play();
  });
}

let audiosA3 = document.querySelectorAll(".a3");
let titleAudios5 = document.querySelectorAll(".title5");
for (let i = 0; i < titleAudios5.length; i++) {
  titleAudios5[i].addEventListener("click", (ev) => {
    audiosA3[i].play();
  });
}

// logging live message functionality
//for fisrt game

//let _qestionContainer = document.querySelectorAll(".qestion");
//let play_now_btn = document.getElementById("play_now");
//let firstMessage = "Place each photo under the appropriate heading";

// let counter = 0;
// play_now_btn.addEventListener("click", (ev) => {
//   let firstPartAudio = document.getElementById("placing");
//   firstPartAudio.play();
//   if (counter === 0) {
//     live_writing(firstMessage, _qestionContainer[0]);
//   }
//   counter++;
// });

// for second game

//let secondGameBtn = document.getElementById("part_two");
//let secondMessage = "Choose the Right Situation";
//let partTwoMessage = document.getElementById("part-two-message");
//let counter2 = 0;
// secondGameBtn.addEventListener("click", (ev) => {
//   let choosingAudio = document.getElementById("choosing");
//   setTimeout(() => {
//     choosingAudio.play();
//   }, 1000);

//   if (counter2 === 0) {
//     live_writing(secondMessage, partTwoMessage);
//   }
//   counter2++;
// });

const startBtn = document.querySelector(".start_btn");
const questionCard = document.querySelector(".question-card");
const container = document.querySelector(".contanier");

// display the first question card when clicking start button
flag = true;
startBtn.addEventListener("click", () => {
  if (flag) {
    let question = "First, let us know what is bullying ?";
    let questionContainer = document.querySelector(".qestion1");
    live_writing(question, questionContainer);
  }
  flag = false;

  questionCard.style.display = "none";
  container.style.display = "none";
  displayCard(0);
});

// going to level 1 page
let l1Btn = document.getElementById("L1");
l1Btn.addEventListener("click", (ev) => {
  questionCard.style.display = "none";
  container.style.display = "none";
  index = 1;
  displayCard(1);
});
// going to level 2 page
let l2Btn = document.getElementById("L2");
l2Btn.addEventListener("click", (ev) => {
  questionCard.style.display = "none";
  container.style.display = "none";
  index = 8;
  displayCard(8);
});

//home button
let homeBtn = document.querySelectorAll(".home");
for (let j = 0; j < homeBtn.length; j++) {
  homeBtn[j].addEventListener("click", (ev) => {
    questionCard.style.display = "block";
    container.style.display = "block";
    for (let i = 0; i < secondCard.length; i++) {
      secondCard[i].style.display = "none";
    }
  });
}

// increment the index
let index = 0;
function increment() {
  return index++;
}
function decrement() {
  return index--;
}

//display the card with the given index
const secondCard = document.querySelectorAll(".second_card");
function displayCard(x) {
  const secondCard = document.querySelectorAll(".second_card");
  secondCard[x].style.display = "block";
}

const nextBtn = document.querySelectorAll(".next_btn");
//let flag = false;
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => {
    //const secondCard = document.querySelectorAll(".second_card");
    // calling increment function
    increment();
    //limit the increase of the index
    if (index >= secondCard.length) {
      index = 0;
    }
    // hide all question cards
    for (let i = 0; i < secondCard.length; i++) {
      secondCard[i].style.display = "none";
    }
    //calling display function provided with the required index
    displayCard(index);
  });
}
// back functionality
const backBtn = document.querySelectorAll(".back");
for (let i = 0; i < backBtn.length; i++) {
  backBtn[i].addEventListener("click", () => {
    // calling decrement function
    decrement();
    //limit the decrese of the index
    if (index < 0) {
      index = 0;
    }
    // hide all question cards
    for (let i = 0; i < secondCard.length; i++) {
      secondCard[i].style.display = "none";
    }
    //calling display function provided with the required index
    displayCard(index);
  });
}

let celebrationEffect = document.querySelector(".celebration");
let sound = document.getElementById("success_sound");
let wrongSound = document.getElementById("wrong_sound");

// drag and drop functionality for moblie phones

let dragedImg = document.querySelectorAll(".dragedImg");
let dropArea = document.querySelectorAll(".dropArea");

// counter for the right and wrong answer
let rightAnswersCounter = 0;
let wrongAnswersCounter = 0;

for (let i = 0; i < dragedImg.length; i++) {
  dragedImg[i].addEventListener(
    "touchmove",
    function (eo) {
      eo.target.style.position = "absolute";
      //grab the location of the touch
      let touchLocation = eo.targetTouches[0];
      //assign head new coordinates based on the touch
      dragedImg[i].style.left = touchLocation.pageX - 50 + "px";
      dragedImg[i].style.top = touchLocation.pageY - 130 + "px";

      eo.preventDefault();
    },
    false
  );

  dragedImg[i].addEventListener("touchend", function (eo) {
    eo.target.style.position = "static";
    //current dragedImg[i] position when dropped
    let x = parseInt(dragedImg[i].style.left) + 50;
    let y = parseInt(dragedImg[i].style.top) + 130;
    if (x > 31 && x < 120 && y > 205 && y < 356 && eo.target.id === "A1") {
      dropArea[0].appendChild(eo.target);
      rightAnswersCounter++;
      dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 139 &&
      x < 255 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "A3"
    ) {
      rightAnswersCounter++;
      dropArea[1].appendChild(eo.target);
      sound.play();
      dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 243 &&
      x < 335 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "A2"
    ) {
      rightAnswersCounter++;
      dropArea[2].appendChild(eo.target);
      sound.play();
      dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[0].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 31 &&
      x < 120 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "B3"
    ) {
      rightAnswersCounter++;
      dropArea[3].appendChild(eo.target);
      dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 139 &&
      x < 255 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "B1"
    ) {
      rightAnswersCounter++;
      dropArea[4].appendChild(eo.target);
      dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 243 &&
      x < 335 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "B2"
    ) {
      rightAnswersCounter++;
      dropArea[5].appendChild(eo.target);
      dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[3].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 31 &&
      x < 120 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "C2"
    ) {
      rightAnswersCounter++;
      dropArea[6].appendChild(eo.target);
      dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 139 &&
      x < 255 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "C3"
    ) {
      rightAnswersCounter++;
      dropArea[7].appendChild(eo.target);
      dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 243 &&
      x < 335 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "C1"
    ) {
      rightAnswersCounter++;
      dropArea[8].appendChild(eo.target);
      dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[6].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 31 &&
      x < 120 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "D3"
    ) {
      rightAnswersCounter++;
      dropArea[9].appendChild(eo.target);
      dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 139 &&
      x < 255 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "D1"
    ) {
      rightAnswersCounter++;
      dropArea[10].appendChild(eo.target);
      dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 243 &&
      x < 335 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "D2"
    ) {
      rightAnswersCounter++;
      dropArea[11].appendChild(eo.target);
      dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[9].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 31 &&
      x < 120 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "E2"
    ) {
      rightAnswersCounter++;
      dropArea[12].appendChild(eo.target);
      dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 139 &&
      x < 255 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "E1"
    ) {
      rightAnswersCounter++;
      dropArea[13].appendChild(eo.target);
      dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else if (
      x > 243 &&
      x < 335 &&
      y > 205 &&
      y < 356 &&
      eo.target.id === "E3"
    ) {
      rightAnswersCounter++;
      dropArea[14].appendChild(eo.target);
      dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
      setTimeout(() => {
        dropArea[12].parentElement.parentElement.parentElement.style.backgroundColor =
          "";
      }, 3000);
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
    } else {
      wrongAnswersCounter++;
      eo.target.parentElement.parentElement.style.backgroundColor =
        "rgb(201, 61, 26)";
      setTimeout(() => {
        eo.target.parentElement.parentElement.style.backgroundColor = "";
      }, 3000);
      wrongSound.play();
    }
  });
}

//part 1 for desktop

function allowDrop(eo) {
  eo.preventDefault();
}

function drag(eo) {
  eo.dataTransfer.setData("text", eo.target.id);
}

function drop(eo) {
  // target drop area
  eo.preventDefault();
  let data = eo.dataTransfer.getData("text");
  if (data === "A1" && eo.target.id === "DA1") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "A3" && eo.target.id === "DA2") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "A2" && eo.target.id === "DA3") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "B3" && eo.target.id === "DB1") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "B1" && eo.target.id === "DB2") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "B2" && eo.target.id === "DB3") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "C2" && eo.target.id === "DC1") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "C3" && eo.target.id === "DC2") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "C1" && eo.target.id === "DC3") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "D3" && eo.target.id === "DD1") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "D1" && eo.target.id === "DD2") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "D2" && eo.target.id === "DD3") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "E2" && eo.target.id === "DE1") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "E1" && eo.target.id === "DE2") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else if (data === "E3" && eo.target.id === "DE3") {
    rightAnswersCounter++;
    document.getElementById(data).style.position = "static";
    eo.target.appendChild(document.getElementById(data));
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgba(74, 226, 112, 0.55)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 3000);
    sound.play();
    celebrationEffect.style.display = "block";
    setTimeout(() => {
      celebrationEffect.style.display = "none";
    }, 3000);
  } else {
    wrongAnswersCounter++;
    eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
      "rgb(201, 61, 26)";
    setTimeout(() => {
      eo.target.parentElement.parentElement.parentElement.style.backgroundColor =
        "";
    }, 2000);
    wrongSound.play();
  }
}

for (let i = 0; i < dragedImg.length; i++) {
  dragedImg[i].addEventListener("dragstart", drag);
}

for (let i = 0; i < dropArea.length; i++) {
  dropArea[i].addEventListener("drop", drop);
  dropArea[i].addEventListener("dragover", allowDrop);
}

//part 2

let right = document.querySelectorAll(".img1");
let wrong = document.querySelectorAll(".img2");

for (let i = 0; i < right.length; i++) {
  right[i].addEventListener("click", (eo) => {
    rightAnswersCounter++;
    if (eo.target.classList.value === "img1") {
      sound.play();
      celebrationEffect.style.display = "block";
      setTimeout(() => {
        celebrationEffect.style.display = "none";
      }, 3000);
      eo.target.parentElement.parentElement.style.backgroundColor =
        "rgba(74, 226, 112, 0.55)";
    }
  });

  wrong[i].addEventListener("click", (eo) => {
    wrongAnswersCounter++;
    if (eo.target.classList.value === "img2") {
      eo.target.parentElement.parentElement.style.backgroundColor =
        "rgb(201, 61, 26)";
      setTimeout(() => {
        eo.target.parentElement.parentElement.style.backgroundColor = "";
      }, 2000);
      wrongSound.play();
    }
  });
}

// playing  audios for the last two questions

let _audio1 = document.getElementById("audio1");
let _audio1_player_btn = document.getElementById("au1");
_audio1_player_btn.addEventListener("click", (ev) => {
  _audio1.play();
});
let _audio2 = document.getElementById("audio2");
let _audio2_player_btn = document.getElementById("au2");
_audio2_player_btn.addEventListener("click", (ev) => {
  _audio2.play();
});

au3.addEventListener("click", (ev) => {
  let a = new Audio('sounds/last two questions sounds/cyper b.mpeg');
  a.play();
});

au4.addEventListener("click", (ev) => {
  let b = new Audio('sounds/last two questions sounds/phisical b.mpeg');
  b.play();
});

// logging the results
let lastNext = document.getElementById("lastNext");
let rightScore = document.getElementById("rightScore");
let wrongScore = document.getElementById("wrongScore");
let scorePersantage = document.getElementById("score");

lastNext.addEventListener("click", (ev) => {
  rightScore.innerHTML = rightAnswersCounter;
  wrongScore.innerHTML = wrongAnswersCounter;
  let res = ((rightAnswersCounter - wrongAnswersCounter) / 28) * 100;
  scorePersantage.innerHTML = res.toFixed(2) + "%";
});



// instrction voices
instruct1.addEventListener('click',()=>{
  let a = new Audio('sounds/instructions voices/1.mpeg');
  a.play();
});
instruct2.addEventListener('click',()=>{
  let a = new Audio('sounds/instructions voices/2.mpeg');
  a.play();
});

inst1.addEventListener('click',()=>{
  let a = new Audio('/sounds/instruction voices2/1.mpeg');
  a.play();
});
inst2.addEventListener('click',()=>{
  let a = new Audio('sounds/instruction voices2/2.mpeg');
  a.play();
});
inst3.addEventListener('click',()=>{
  let a = new Audio('sounds/instruction voices2/3.mpeg');
  a.play();
});



// let container = document.querySelectorAll(".second_card")[0];
// container.onclick = function (e) {
//   let x = e.pageX;
//   let y = e.pageY;
//   // let y = e.pageY;
//   // let y = e.pageY - 50;
//   // let y = e.pageY

//   console.log(x, y);
// };
