import { DECK, SET_GAME_STARTED } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_DECK = {
    deckId: '',
    remaining: 0,
    fetchState: null,
    message: ''
};

const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, deckId, cards;

    switch(action.type) {
    case DECK.FETCH_SUCCESS:
        ({ remaining, deckId } = action);
        return { ...state, remaining, deckId, fetchState: fetchStates.success };
    case DECK.FETCH_ERROR:
        return { ...state, message: action.message, fetchState: fetchStates.error }
    case DECK.FETCH_CARD_SUCCESS:
        ({ remaining, cards } = action);
        return { ...state, remaining, cards, fetchState: fetchStates.success };
    case SET_GAME_STARTED:
        return DEFAULT_DECK;
    default:
        return state;
    }
};

export default deckReducer;