import React from 'react'
import './SingleCard.css'

const SingleCard = ({card, handleChoice, flipped, disabled, styles, gameOverHandler}) => {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
    }

    return (
        <div className="card" style={styles} onClick={gameOverHandler}>
            <div className={flipped ? "flipped" : ""}>
                <img src={card.src} className="front" alt="card front" />
                <img src="/img/cover.png" className="back" onClick={handleClick} alt="card default" />
            </div> 
        </div>
    )
}

export default SingleCard
