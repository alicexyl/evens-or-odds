import { SET_GUESS, SET_GAME_STARTED, DECK } from '../actions/types';
import GUESS from '../actions/guessTypes';

const DEFAULT_GAME_STATE = {
    numGuessedRight: 0,
    guess: null 
};

const gameStateReducer = (state = DEFAULT_GAME_STATE, action) => {
    switch(action.type) {
    case SET_GUESS:
        return { ...state, guess: action.guess };
    case SET_GAME_STARTED:
        return DEFAULT_GAME_STATE;
    case DECK.FETCH_CARD_SUCCESS:
        const { value } = action.cards && action.cards[0];

        const isGuessRight = !isNaN(parseInt(value)) 
        && (state.guess == GUESS.EVEN && !(value % 2)
        || state.guess == GUESS.ODD && value % 2);

        return {...state, 
            numGuessedRight: isGuessRight ? 
            state.numGuessedRight + 1 : 
            state.numGuessedRight };
    default:
        return state;
    }
};

export default gameStateReducer;