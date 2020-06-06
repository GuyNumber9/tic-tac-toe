import React from 'react';

interface iStartModalProps {
    onSelectOpponent: (opponent: string) => void
}

export default function StartModal(props: iStartModalProps){

    return (<div className="ttt-start-modal">
        <div>
            <h2>Select Opponent</h2>
            <button onClick={() => props.onSelectOpponent('human')}>Human</button>
            <button onClick={() => props.onSelectOpponent('computer')}>Computer</button>
        </div>
    </div>)
}