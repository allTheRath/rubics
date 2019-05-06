//hi
// rubics cube::--
// six sides:-
// each side starts with same colors:-
// main object with six sides:-
// on each side option is to rotate vertical or horizontal or spacial::-

class Cube {
    constructor() {
        let board = [];
        ['red', 'blue', 'yellow', 'orange', 'green', 'white'].forEach(function(ele) {
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
console.log(board1);