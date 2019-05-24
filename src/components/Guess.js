import React from 'react';
import { connect } from 'react-redux';
import { guessEven, guessOdd } from '../actions/gameState';
import GUESS from '../actions/guessTypes';

const Guess = ({guess, guessEven, guessOdd }) => {
    const selectedButtonClass = 'is-selected';

    return (
        <div>
            <h3>Will it be even or odd?</h3>
            <div>
                <button 
                onClick={guessEven} 
                className={guess == GUESS.EVEN ? selectedButtonClass : null }>
                    Even
                </button>
                {' '}
                <button 
                onClick={guessOdd} 
                className={guess == GUESS.ODD ? selectedButtonClass : null }>
                    Odd
                </button>
            </div>

        </div> 
    )
}

export default connect(
    ({ gameState: { guess } }) => ({ guess }),
    { guessEven, guessOdd }
)(Guess);
