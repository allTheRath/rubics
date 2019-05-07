//hi
// rubics cube::--
// six sides:-
// each side starts with same colors:-
// main object with six sides:-
// on each side option is to rotate vertical or horizontal or spacial::-

class Cube {
    constructor() {
        let board = [];
        ['red', 'blue', 'yellow', 'black', 'green', 'white'].forEach(function(ele) {
            let a = [];
            [1,2,3,4,5,6,7,8,9].forEach(function(ele2) {
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

let board1 = new Cube();

let click = false;
let front = document.body.querySelector('.front');
let mainBoxes = document.querySelectorAll('.front i');
mainBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'white');
    ele.style.color = 'white';
    board1.board[0].forEach(ele => {
        ele.color = 'white';
    });
});

let leftBoxes = document.querySelectorAll('.l i');
leftBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'red');
    ele.style.color = 'red';
    board1.board[1].forEach(ele => {
        ele.color = 'red';
    });
});

let rightBoxes = document.querySelectorAll('.r i');
rightBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'blue');
    ele.style.color = 'blue';
    board1.board[2].forEach(ele => {
        ele.color = 'blue';
    });
});

let topBoxes = document.querySelectorAll('.t i');
topBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'yellow');
    ele.style.color = 'yellow';
    board1.board[3].forEach(ele => {
        ele.color = 'yellow';
    });
});

let bottomBoxes = document.querySelectorAll('.b i');
bottomBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'black');
    ele.style.color = 'black';
    board1.board[4].forEach(ele => {
        ele.color = 'black';
    });
});

let rearBoxes = document.querySelectorAll('.rear i');
rearBoxes.forEach(ele => {
    ele.setAttribute('data-color', 'green');
    ele.style.color = 'green';
    board1.board[5].forEach(ele => {
        ele.color = 'green';
    });
});

front.addEventListener('click', function(e) {
    console.log(e.target);
    click = e.target;
});

let direction = document.body.querySelector('#all-btn');

function updateColor(allColors) {
    let mainColors = allColors[0];
    let mainBoxes = document.querySelectorAll('.front i');
    mainBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', mainColors[indx]);
        ele.style.color = mainColors[indx];
    });
    
    let leftBoxes = document.querySelectorAll('.l i');
    let leftColors = allColors[1];
    leftBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', leftColors[indx]);
        ele.style.color = leftColors[indx];
    });
    
    let rightBoxes = document.querySelectorAll('.r i');
    let rightColors = allColors[2];
    rightBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', rightColors[indx]);
        ele.style.color = rightColors[indx];
    });
    
    let topBoxes = document.querySelectorAll('.t i');
    let topColors = allColors[3];
    topBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', topColors[indx]);
        ele.style.color = topColors[indx];
    });
    
    let bottomBoxes = document.querySelectorAll('.b i');
    let bottomColors = allColors[4];
    bottomBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', bottomColors[indx]);
        ele.style.color = bottomColors[indx];
    });
    
    let rearBoxes = document.querySelectorAll('.rear i');
    let rearColors = allColors[5];
    rearBoxes.forEach((ele, indx) => {
        ele.setAttribute('data-color', rearColors[indx]);
        ele.style.color = rearColors[indx];
    });

}
function getColor() {
    let mainColors = [];
    let mainBoxes = document.querySelectorAll('.front i');
    mainBoxes.forEach(ele => {
        mainColors.push(ele.getAttribute('data-color'));
    });
    
    let leftBoxes = document.querySelectorAll('.l i');
    let leftColors = [];
    leftBoxes.forEach(ele => {
        leftColors.push(ele.getAttribute('data-color'));
    });
    
    let rightBoxes = document.querySelectorAll('.r i');
    let rightColors = [];
    rightBoxes.forEach(ele => {
        rightColors.push(ele.getAttribute('data-color'));
    });
    
    let topBoxes = document.querySelectorAll('.t i');
    let topColors = [];
    topBoxes.forEach(ele => {
        topColors.push(ele.getAttribute('data-color', 'yellow'));
    });
    
    let bottomBoxes = document.querySelectorAll('.b i');
    let bottomColors = [];
    bottomBoxes.forEach(ele => {
        bottomColors.push(ele.getAttribute('data-color'));
    });
    
    let rearBoxes = document.querySelectorAll('.rear i');
    let rearColors = [];
    rearBoxes.forEach(ele => {
        rearBoxes.push(ele.getAttribute('data-color'));
    });
    let allSides = [mainColors, leftColors, rightColors, topColors, bottomColors, rearColors];
    return allSides;
}

direction.addEventListener('click', function(e) {

    const dR = {
        'fa-angle-double-up': 'up',
        'fa-angle-double-left': 'left',
        'fa-angle-double-right': 'right',
        'fa-angle-double-down': 'down',
    }
    let move = undefined;
    let temp = false;
    for(let key in dR) {
        if(e.target.classList.contains(key)) {
            move = dR[key];
            temp = true;
        }
    }
    let allSides = [];
    if(temp == true) {
        allSides = getColor();
    }

    let directionObj = {
        0: 'front',
        1: 'l',
        2: 'r',
        3: 't',
        4: 'b',
        5: 'rear',
    }
    if(move === 'up') {
// whatever clicked its acoording:-
// if clicked on middle then just curcular shift for all middle colums
// if right sided box clicked -- curcular shift for all right colums + row to reverse row as colums for the rightSide --: c1 - r3, c2 - r2, c3 - r1
// if left sided box clicked --  curcular shift for all right colums + colums for left side --: c1 - r1, c2 - r2, c3 - r3..

    }
    else if(move == 'down') {
        
// if clicked on middle inverse curcular shift
// if clicked on right -- inverse curcular shift + 
    }
    else if(move == 'left') {

    }
    else if(move == 'right') {


    }


    click = false;
});
