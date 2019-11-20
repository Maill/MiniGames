import { createStore } from 'redux'
import SudokuReducer from './SudokuReducer';

const SudokuStore = createStore(SudokuReducer)

export default SudokuStore;