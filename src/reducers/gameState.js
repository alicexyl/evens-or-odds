import { SET_GUESS, SET_GAME_STARTED, DECK } from '../actions/types';
import GUESS from '../actions/guessTypes';

const DEFAULT_GAME_STATE = {
    correctGuesses: 0,
    guess: null 
};

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch(action.type) {
    case SET_GUESS:
        return { ...state, guess: action.guess };
    case SET_GAME_STARTED:
        return DEFAULT_GAME_STATE;
    case DECK.FETCH_CARD_SUCCESS:
        const { value } = action.cards[0];
        const { guess, correctGuesses } = state;

        const isGuessCorrect = (value === 'ACE' && guess == GUESS.ODD)
        || (!isNaN(parseInt(value)) 
        && (guess == GUESS.EVEN && !(value % 2)
        || guess == GUESS.ODD && value % 2));

        return {...state, 
            correctGuesses: isGuessCorrect ? 
            correctGuesses + 1 : 
            correctGuesses };
    default:
        return state;
    }
};

export default gameStateReducer;