const board = document.getElementById('chess-board');

// Initialize board
const initBoard = () => {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square ' + ((row + col) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = row;
            square.dataset.col = col;
            board.appendChild(square);
        }
    }
    placePieces();
};

// Place pieces on the board
const placePieces = () => {
    const initialPieces = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
    ];
    
    const pieces = initialPieces.flat();
    const squares = document.querySelectorAll('.square');
    
    squares.forEach((square, index) => {
        const piece = pieces[index] || '';
        if (piece) {
            square.innerHTML = pieceToEmoji(piece);
            square.classList.add('piece');
        }
    });
};

// Convert piece to emoji
const pieceToEmoji = (piece) => {
    const emojis = {
        'p': '♟️', 'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚',
        'P': '♙', 'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔'
    };
    return emojis[piece] || '';
};

initBoard();