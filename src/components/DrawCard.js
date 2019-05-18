import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/deck';

class DrawCard extends Component {
    fetchNewCard = deckId => () => {
        this.props.fetchNewCard(deckId);
    }

    render() {
        console.log('DrawCard props', this.props);

        const {deckId, value, suit, code, image } = this.props;
    
        return (
            <div>
                <button onClick={this.fetchNewCard(deckId)}> Draw the next card!</button>
                <br />
                <p>{ code ? <img src={image} alt={`${value} of ${suit}`} /> : null }</p>
            </div>
        )
    }
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
    { fetchNewCard }
)(DrawCard);