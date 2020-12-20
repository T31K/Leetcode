const board = [
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".","R",".",".",".","p"],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".","p",".",".",".","."],
    [".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".","."]
];
let rook_row
let rook_col
let rook_column_up = []
let rook_column_down = []       
for (var i = 0 ; i < board.length ; ++i){
    for (var j = 0 ; j < board[i].length ; j++){
        if (board[i][j] === "R"){
            rook_row = i
            rook_col = j
    }
}
}

let rook_found = false
for (var k = 0 ; k < board.length ; ++k){
    if (board[k][rook_col] !== "R" && !rook_found){
        rook_column_up.push(board[k][rook_col])
    } else if (board[k][rook_col] === "R"){
        rook_found = true
    } else {
        rook_column_down.push(board[k][rook_col])
    }
}


}

console.log(rook_column_up)
console.log(rook_column_down)
8