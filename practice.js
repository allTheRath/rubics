/* eslint-disable max-len */
/* eslint-disable brace-style */
/* eslint-disable require-jsdoc */
// hi
// rubics cube::--
// six sides:-
// each side starts with same colors:-
// main object with six sides:-
// on each side option is to rotate vertical or horizontal or spacial::-

class Cube {
  constructor() {
    const board = [];
    ['red', 'blue', 'yellow', 'black', 'green', 'white'].forEach(function(ele) {
      const a = [];
      [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach(function(ele2) {
        a.push(new Side(ele, ele2));
      });
      board.push(a);
    });
    this.board = board;
  }
}

class Side {
  constructor(color, position) {
    this.color = color;
    this.position = position;
  }
}

const board1 = new Cube();
const mainBoxes = document.querySelectorAll('.front i');
mainBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'white');
  ele.style.color = 'white';
  board1.board[0].forEach((ele) => {
    ele.color = 'white';
  });
});

const leftBoxes = document.querySelectorAll('.l i');
leftBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'red');
  ele.style.color = 'red';
  board1.board[1].forEach((ele) => {
    ele.color = 'red';
  });
});

const rightBoxes = document.querySelectorAll('.r i');
rightBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'blue');
  ele.style.color = 'blue';
  board1.board[2].forEach((ele) => {
    ele.color = 'blue';
  });
});

const topBoxes = document.querySelectorAll('.t i');
topBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'yellow');
  ele.style.color = 'yellow';
  board1.board[3].forEach((ele) => {
    ele.color = 'yellow';
  });
});

const bottomBoxes = document.querySelectorAll('.b i');
bottomBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'black');
  ele.style.color = 'black';
  board1.board[4].forEach((ele) => {
    ele.color = 'black';
  });
});

const rearBoxes = document.querySelectorAll('.rear i');
rearBoxes.forEach((ele) => {
  ele.setAttribute('data-color', 'green');
  ele.style.color = 'green';
  board1.board[5].forEach((ele) => {
    ele.color = 'green';
  });
});

function updateColor(allColors) {
  if (allColors !== undefined) {
    const mainColors = allColors[0];
    const mainBoxes = document.querySelectorAll('.front i');
    mainBoxes.forEach((ele, indx) => {
      ele.setAttribute('data-color', mainColors[indx]);
      ele.style.color = mainColors[indx];
    });

    const leftBoxes = document.querySelectorAll('.l i');
    const leftColors = allColors[1];
    leftBoxes.forEach((ele, indx) => {
      ele.setAttribute('data-color', leftColors[indx]);
      ele.style.color = leftColors[indx];
    });

    const rightBoxes = document.querySelectorAll('.r i');
    const rightColors = allColors[2];
    rightBoxes.forEach((ele, indx) => {
      ele.setAttribute('data-color', rightColors[indx]);
      ele.style.color = rightColors[indx];
    });

    const topBoxes = document.querySelectorAll('.t i');
    const topColors = allColors[3];
    topBoxes.forEach((ele, indx) => {
      ele.setAttribute('data-color', topColors[indx]);
      ele.style.color = topColors[indx];
    });

    const bottomBoxes = document.querySelectorAll('.b i');
    const bottomColors = allColors[4];
    bottomBoxes.forEach((ele, indx) => {
      ele.setAttribute('data-color', bottomColors[indx]);
      ele.style.color = bottomColors[indx];
    });
  }

  const rearBoxes = document.querySelectorAll('.rear i');
  const rearColors = allColors[5];
  rearBoxes.forEach((ele, indx) => {
    ele.setAttribute('data-color', rearColors[indx]);
    ele.style.color = rearColors[indx];
  });
}

function getColor() {
  const mainColors = [];
  const mainBoxes = document.querySelectorAll('.front i');
  mainBoxes.forEach((ele) => {
    mainColors.push(ele.getAttribute('data-color'));
  });

  const leftBoxes = document.querySelectorAll('.l i');
  const leftColors = [];
  leftBoxes.forEach((ele) => {
    leftColors.push(ele.getAttribute('data-color'));
  });

  const rightBoxes = document.querySelectorAll('.r i');
  const rightColors = [];
  rightBoxes.forEach((ele) => {
    rightColors.push(ele.getAttribute('data-color'));
  });

  const topBoxes = document.querySelectorAll('.t i');
  const topColors = [];
  topBoxes.forEach((ele) => {
    topColors.push(ele.getAttribute('data-color', 'yellow'));
  });

  const bottomBoxes = document.querySelectorAll('.b i');
  const bottomColors = [];
  bottomBoxes.forEach((ele) => {
    bottomColors.push(ele.getAttribute('data-color'));
  });

  const rearBoxes = document.querySelectorAll('.rear i');
  const rearColors = [];
  rearBoxes.forEach((ele) => {
    rearColors.push(ele.getAttribute('data-color'));
  });
  const allSides = [mainColors, leftColors, rightColors, topColors, bottomColors, rearColors];
  console.log(allSides);
  return allSides;
}
function removeClass() {
  const temp = document.querySelectorAll('i');
  temp.forEach((ele) => {
    if (ele.classList.contains('r1')) {
      ele.classList.remove('r1');
    }
    if (ele.classList.contains('r2')) {
      ele.classList.remove('r2');
    }
    if (ele.classList.contains('r3')) {
      ele.classList.remove('r3');
    }
    if (ele.classList.contains('c1')) {
      ele.classList.remove('c1');
    }
    if (ele.classList.contains('c2')) {
      ele.classList.remove('c2');
    }
    if (ele.classList.contains('c3')) {
      ele.classList.remove('c3');
    }
  });
}
function addClass() {
  const temp = document.querySelectorAll('i');
  temp.forEach((ele) => {
    if (ele.classList.contains('l1')) {
      ele.classList.add('c1');
      ele.classList.add('r1');
    }
    if (ele.classList.contains('l2')) {
      ele.classList.add('c2');
      ele.classList.add('r1');
    }
    if (ele.classList.contains('l3')) {
      ele.classList.add('c3');
      ele.classList.add('r1');
    }
    if (ele.classList.contains('l4')) {
      ele.classList.add('c1');
      ele.classList.add('r2');
    }
    if (ele.classList.contains('l5')) {
      ele.classList.add('c2');
      ele.classList.add('r2');
    }
    if (ele.classList.contains('l6')) {
      ele.classList.add('c3');
      ele.classList.add('r2');
    }
    if (ele.classList.contains('l7')) {
      ele.classList.add('c1');
      ele.classList.add('r3');
    }
    if (ele.classList.contains('l8')) {
      ele.classList.add('c2');
      ele.classList.add('r3');
    }
    if (ele.classList.contains('l9')) {
      ele.classList.add('c3');
      ele.classList.add('r3');
    }
  });
}

function updateAllSides(allSides, place, move) {
  const returning = allSides;
  const j = {};
  j['front'] = allSides[0];
  j['left'] = allSides[1];
  j['right'] = allSides[2];
  j['top'] = allSides[3];
  j['bottom'] = allSides[4];
  j['rear'] = allSides[5];
  if (move == 'up') {
    // whatever clicked its acoording:-
    // if clicked on middle then just curcular shift for all middle colums
    // if right sided box clicked -- curcular shift for all right colums + row to reverse row as colums for the rightSide --: c1 - r3, c2 - r2, c3 - r1
    // if left sided box clicked --  curcular shift for all right colums + colums for left side --: c1 - r1, c2 - r2, c3 - r3..
    // e.target contains c2 then its middle
    // if c1 then left
    // if c3 then right
    console.log('up', place);
    if (place == 'c1') {
      tempArr = [j.front[0], j.front[3], j.front[6]];
      j.front[0] = j.bottom[0];
      j.front[3] = j.bottom[3];
      j.front[6] = j.bottom[6];
      j.bottom[0] = j.rear[0];
      j.bottom[3] = j.rear[3];
      j.bottom[6] = j.rear[6];
      j.rear[0] = j.top[0];
      j.rear[3] = j.top[3];
      j.rear[6] = j.top[6];
      j.top[0] = tempArr[0];
      j.top[3] = tempArr[1];
      j.top[6] = tempArr[2];
      tempArr = j.left;
      j.left[0] = tempArr[2];
      j.left[1] = tempArr[5];
      j.left[2] = tempArr[8];
      j.left[3] = tempArr[1];
      j.left[4] = tempArr[4];
      j.left[5] = tempArr[7];
      j.left[6] = tempArr[0];
      j.left[7] = tempArr[3];
      j.left[8] = tempArr[6];
      returning[0] = j['front'];
      returning[1] = j['left'];
      returning[2] = j['right'];
      returning[3] = j['top'];
      returning[4] = j['bottom'];
      returning[5] = j['rear'];
      console.log(returning, 'returning');
    } else if (place == 'c2') {

    } else if (place == 'c3') {

    }
  } else if (move == 'left') {
    if (place == 'c1') {

    } else if (place == 'c2') {

    } else if (place == 'c3') {

    }
  } else if (move == 'right') {
    if (place == 'c1') {

    } else if (place == 'c2') {

    } else if (place == 'c3') {

    }
  } else if (move == 'down') {
    if (place == 'c1') {

    } else if (place == 'c2') {

    } else if (place == 'c3') {

    }
  }
  return returning;

  // all new colors
}
// prob-- eventlistner adding
let eleClicked = undefined;
document.body.querySelector('main').addEventListener('click', function(e) {
  if (e.target.classList.contains('fa-square')) {
    eleClicked = e.target;
  }
});
document.body.addEventListener('click', function(e) {
  const dR = {
    'fa-angle-double-up': 'up',
    'fa-angle-double-left': 'left',
    'fa-angle-double-right': 'right',
    'fa-angle-double-down': 'down',
  };
  let move = undefined;
  let place = undefined;
  let allSides = [];
  for (key in dR) {
    if (e.target.classList.contains(key)) {
      move = dR[key];
      console.log(move);
      if (eleClicked.classList.contains('c2')) {
        place = 'c2';
      } else if (eleClicked.classList.contains('c1')) {
        place = 'c1';
      } else if (eleClicked.classList.contains('c3')) {
        place = 'c3';
      }
      allSides = getColor();
      console.log(place);
    }
  }
  // getting the position of clicked element-- below
  // on each move all six arrays will be updated
  if (move === 'up') {
    const a = updateAllSides(allSides, place, move);
    console.log(a);
    if (a != undefined) {
      updateColor(a);
      removeClass();
      addClass();
    }
  }
  // whatever clicked its acoording:-
  // if clicked on middle then just curcular shift for all middle colums
  // if right sided box clicked -- curcular shift for all right colums + row to reverse row as colums for the rightSide --: c1 - r3, c2 - r2, c3 - r1
  // if left sided box clicked --  curcular shift for all right colums + colums for left side --: c1 - r1, c2 - r2, c3 - r3..
  // e.target contains c2 then its middle
  // if c1 then left
  // if c3 then right

  else if (move == 'down') {
    const a = updateAllSides(allSides, place, move);
    if (a) {
      updateColor(a != undefined);
      removeClass();
      addClass();
    }
    // if clicked on middle inverse curcular shift
    // if clicked on right -- inverse curcular shift +
  }
  else if (move == 'left') {
    if (a) {
      updateColor(a != undefined);
      removeClass();
      addClass();
    }
  }
  else if (move == 'right') {
    const a = updateAllSides(allSides, place, move);
    if (a != undefined) {
      updateColor(a);
      removeClass();
      addClass();
    }
  }
});
