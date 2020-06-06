const winStates = [
    [0, 4, 8],
    [2, 4, 6],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

export function getAvailableMoves(values: string[]): number[] {
    let availableMoves: number[] = [];
    values.forEach((currentValue, currentIndex) => {
        if(currentValue === ''){
            availableMoves.push(currentIndex);
        }
    });
    return availableMoves;
}

export function getRandomMove(values: string[]): number{
    let availableMoves: number[] = getAvailableMoves(values);
    return availableMoves[Math.floor(Math.random()*availableMoves.length)];
}

export function getWinningMove(values: string[]): number {
    let move = -1;
    let possibleMoves: number[] = [];

    for(let winState of winStates){
        let possibleMove;
        if((values[winState[0]] !== '' && values[winState[1]] !== '') && (values[winState[0]] === values[winState[1]])){
            possibleMove = winState[2];
            possibleMoves.push(possibleMove);
        }
        else if((values[winState[0]] !== '' && values[winState[2]] !== '') && (values[winState[0]] === values[winState[2]])){
            possibleMove = winState[1];
            possibleMoves.push(possibleMove);
        }
        else if((values[winState[1]] !== '' && values[winState[2]] !== '') && (values[winState[1]] === values[winState[2]])){
            possibleMove = winState[0];
            possibleMoves.push(possibleMove);
        }
    }

    let availableMoves: number[] = getAvailableMoves(values);

    let filteredPossibleMoves = possibleMoves.filter((value) => availableMoves.includes(value));

    move = filteredPossibleMoves[Math.floor(Math.random()*filteredPossibleMoves.length)] || -1;

    return move;
}

export function getWinner(values: string[]): string {
    let winner = '';

    for(let winState of winStates){
        if(values[winState[0]] === values[winState[1]] && values[winState[0]] === values[winState[2]]){
            if(values[winState[0]] !== ''){
                winner = values[winState[0]];
                break;
            }
        }
    }

    return winner;
}