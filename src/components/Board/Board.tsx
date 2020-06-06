import React from 'react';
import Square from '../Square/Square';


interface iBoardProps {
    values: string[],
    onSquareClick: (index: number) => void
}

export default class Board extends React.Component<iBoardProps, {}>{
    render(){
        return (<div className="ttt-board">
            {this.props.values.map((value, index) => {
                return <Square key={index} value={value} handleClick={() => this.props.onSquareClick(index)}/>
            })}
        </div>);
    }
    
}