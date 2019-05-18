import { DECK } from './types';

const DECK_OF_CARDS_API = 'https://deck-of-cards-api-wrapper.appspot.com/deck';

export const fetchDeckSuccess = deckJson => {
    const { remaining, deck_id: deckId } = deckJson;
    
    return { type: DECK.FETCH_SUCCESS, remaining, deckId };
}

export const fetchDeckError = error => {
    return { type: DECK.FETCH_ERROR, message: error.message };
}

export const fetchNewDeck = () => dispatch => {
    return fetch(`${DECK_OF_CARDS_API}/new/shuffle/`)
    .then(response => {
        if (response.status != 200) {
            throw new Error ('Unsuccesful request to deckofcardsapi.com');
        }

        return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}

export const fetchNewCard = deckId => dispatch => {
    return fetch(`${DECK_OF_CARDS_API}/${deckId}/draw`)
    .then(response => {
        if (response.status != 200) {
            throw new Error ('Unsuccesful request to deckofcardsapi.com');
        }

        return response.json();
    })
    .then(json => dispatch(fetchCardSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}

export const fetchCardSuccess = cardsJson => {
    const { remaining, cards } = cardsJson;
    const { value, suit, code, image } = cards && cards[0];

    return {
        type: DECK.FETCH_CARD_SUCCESS,
        remaining, 
        value, suit, code, image
     };
}