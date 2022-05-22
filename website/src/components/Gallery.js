import React from 'react';
import Card from './Card';
import initialCards from './initialCards';

export default function Gallery(){
    const [cards, setCards] = React.useState(initialCards)

    function toggle(id){
        setCards(cards => cards.map(card => card.id === id? {...card, showMore : !card.showMore}: card))
    }

    return(
        <div className="text-white text-start ps-5 pt-5">
            <h3 id='gallery'>Gallery</h3>
            <p className='lead'>I do visualizations of sports data for fun. Here are some examples:</p>
            <div className='container text-black'>
                <div className='row row-cols-auto gy-5'>
                    {cards.map(card => <Card image={card.image} title={card.title} caption={card.caption} showMore={card.showMore} id={card.id} toggle={toggle} key={card.id}/>)}
                </div>

            </div>
        </div>
    )
}