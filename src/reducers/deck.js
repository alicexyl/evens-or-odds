import { DECK } from '../actions/types';
import fetchStates from './fetchStates';
import { stat } from 'fs';

const DEFAULT_DECK = {
    deckId: '',
    remaining: 0,
    fetchState: null,
    message: ''
};

const deckReducer = (state = DEFAULT_DECK, action) => {
    console.log('state', state, 'action', action);

    switch(action.type) {
    case DECK.FETCH_SUCCESS:
        const { remaining, deckId } = action;
        return { ...state, remaining, deckId, fetchState: fetchStates.success };
    case DECK.FETCH_ERROR:
        return { ...state, message: action.message, fetchState: fetchStates.error }
    case DECK.FETCH_CARD_SUCCESS:
        const { remaining: remaining2, value, suit, code, image } = action;
        return { ...state, remaining: remaining2, value, suit, code, image, fetchState: fetchStates.success };
    default:
        return state;
    }
};

export default deckReducer;