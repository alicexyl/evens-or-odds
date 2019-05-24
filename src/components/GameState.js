import React from 'react';
import { connect } from 'react-redux';
import { guessEven, guessOdd } from '../actions/gameState';
import GUESS from '../actions/guessTypes';

const GameState = ({ remaining, numGuessedRight, guess, guessEven, guessOdd }) => {

    const selectedButtonClass = 'is-selected';

    return (
        <div>
            <p>{remaining} { remaining === 1 ? 'card' : 'cards'} remaining</p>
            <p>{numGuessedRight} correct { numGuessedRight === 1 ? 'guess' : 'guesses'}</p>

            <h3>Will it be even or odd?</h3>
            <p>
                <button 
                onClick={guessEven} 
                className={guess == GUESS.EVEN ? selectedButtonClass : null }>
                    Even
                </button>
                <button 
                onClick={guessOdd} 
                className={guess == GUESS.ODD ? selectedButtonClass : null }>
                    Odd
                </button>
            </p>
        </div>
    )
}

export default connect(
    ({ deck: { remaining }, gameState: { guess, numGuessedRight } }) => ({ remaining, guess, numGuessedRight }),
    { guessEven, guessOdd })(GameState);
