import React from 'react'
import './modal.css'

const Modal = ({modal, turns, shuffleCards}) => {
    return (
        <div className={modal ? 'modal' : 'modal-hidden'}>
            <div className="modal-wrapper">
                <h1>Congratulations! You've passed this game with {turns} turns</h1>
                <button onClick={shuffleCards} style={{filter: 'invert(1)'}}>New Game</button>
            </div>
        </div>
    )
}

export default Modal
