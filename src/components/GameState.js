import React from 'react';
import { connect } from 'react-redux';
import { guessEven, guessOdd } from '../actions/gameState';
import GUESS from '../actions/guessTypes';

const GameState = ({ remaining, numGuessedRight }) => {
    return (
        <div>
            <p>{remaining} { remaining === 1 ? 'card' : 'cards'} remaining</p>
            <p>{numGuessedRight} correct { numGuessedRight === 1 ? 'guess' : 'guesses'}</p>
        </div>
    )
}

export default connect(
    ({ deck: { remaining }, gameState: { numGuessedRight } }) => ({ remaining, numGuessedRight })
)(GameState);
