import { SET_GUESS } from './types';
import GUESS from './guessTypes';

export const guessEven = () => {
    return { type: SET_GUESS, guess: GUESS.EVEN };
}

export const guessOdd = () => {
    return { type: SET_GUESS, guess: GUESS.ODD };
}