import React from 'react';
import { useSearchParams } from 'react-router';
import { CARD_DATA } from '../../utils/Helper';

const Cards = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClick = (card) => {
        setSearchParams({ card: card.replace(/ /g, '-') });
    };

    const selectedCard = searchParams.get('card');

    return (
        <div className='bg-dark-blue'>
            <div className="container row gap-3 mx-auto py-5">
                <h2 className='product text-center'>Card Params</h2>
                {CARD_DATA.map((card, i) => (
                        <div key={i}
                            onClick={() => handleClick(card.heading)}
                            className={`card p-3 w-50 mx-auto ${selectedCard === card.heading.replace(/ /g, '-') ? 'bg-dark-green' : ''}`}>
                            <h2 className={`text-center cursor-pointer description mx-auto ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`} >
                                {card.heading}
                            </h2>
                        <p className={`text-center cursor-pointer description mx-auto ${selectedCard === card.heading.replace(/ /g, '-') ? 'text-white' : ''}`}>
                {card.description}
            </p>
        </div>
                ))}
            </div >
        </div >
    );
};

export default Cards;
