import React from 'react';

interface iEndModalProps {
    message: string,
    playAgain: () => void
}

export default function EndModal(props: iEndModalProps){
    return (<div className="ttt-end-modal">
        <div>
            <h2>{props.message}</h2>
            <button onClick={() => props.playAgain()}>Play Again</button>
        </div>
    </div>)
}