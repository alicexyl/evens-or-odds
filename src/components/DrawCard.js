import React from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/deck';

const DrawCard = props => {
    const { deckId, value, suit, code, image, fetchNewCard } = props;

    return (
        <div>
            <p><button onClick={fetchNewCard(deckId)}> Draw the next card!</button></p>
            { code ? <p><br /><img src={image} alt={`${value} of ${suit}`} /></p> : null }
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
        remaining, 
        value, 
        suit, 
        code, 
        image 
    } }) => ({ deckId, remaining, value, suit, code, image }),
    mapDispatchToProps
)(DrawCard);