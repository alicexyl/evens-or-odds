import React from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/deck';

const DrawCard = props => {
    const { deckId, fetchNewCard } = props;

    return (
        <div>
            <p><button onClick={fetchNewCard(deckId)}> Draw the next card!</button></p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        fetchNewCard: deckId => () => dispatch(fetchNewCard(deckId))
    };
}

export default connect(
    ({ deck: { 
        deckId, 
        remaining 
    } }) => ({ deckId, remaining }),
    mapDispatchToProps
)(DrawCard);