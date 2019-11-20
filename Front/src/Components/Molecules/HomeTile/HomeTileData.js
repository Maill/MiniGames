import tictactoeImg from '../../../Static/Img/tictactoe.png'
import sudokuImg from '../../../Static/Img/sudoku.png'
import simonImg from '../../../Static/Img/simon.png'

const tictactoe = () => {
    return {
        title: "Tic-Tac-Toe",
        desc: "Jouez à une partie de tic-tac-toe en ligne.",
        img: tictactoeImg,
    }
}

const sudoku = () => {
    return {
        title: "Sudoku",
        desc: "Faites marcher votre logique devant une grille de sudoku.",
        img: sudokuImg,
    }
}

const simon = () => {
    return {
        title: "Simon",
        desc: "Serez-vous capable de tout retenir ?",
        img: simonImg,
    }
}


export { tictactoe, sudoku, simon } ;