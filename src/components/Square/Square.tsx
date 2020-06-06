import React from 'react';

interface SquareProps {
    value: string,
    handleClick: (event: React.MouseEvent) => void
}

export default function Square(props: SquareProps){
    return (<button className="ttt-square" onClick={props.handleClick}>{props.value}</button>);
}