const boardSize = 3; 
const board = [];

for (let i = 0; i < boardSize; i++) {
    const row = [];
    for (let j = 0; j < boardSize; j++) {
        if ((i + j) % 2 === 0) {
            row.push('x');
        } else {
            row.push('o');
        }
    }
    board.push(row);
}

for (let i = 0; i < boardSize; i++) {
    console.log(board[i].join(' '));
}