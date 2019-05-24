import React from 'react';
import { connect } from 'react-redux';

const GameState = ({ remaining, correctGuesses }) => {
    return (
        <div>
            <p>{remaining} { remaining === 1 ? 'card' : 'cards'} remaining</p>
            <p>{correctGuesses} correct { correctGuesses === 1 ? 'guess' : 'guesses'}</p>
        </div>
    )
}

export default connect(
    ({ deck: { remaining }, gameState: { correctGuesses } }) => ({ remaining, correctGuesses })
)(GameState);
