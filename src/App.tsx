import React from 'react';
import './App.css';

import * as utilites from './TicTacToeUtilities';

import StartModal from './components/StartModal/StartModal';
import EndModal from './components/EndModal/EndModal';
import Board from './components/Board/Board';

interface iTicTacToeState {
  squares: Array<string>,
  turnCount: number,
  playerOne: string,
  playerTwo: string,
  isGameOver: boolean,
  endMessage: string
}

class TicTacToe extends React.Component<{}, iTicTacToeState> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      squares: new Array(9).fill(''),
      turnCount: 0,
      playerOne: 'human',
      playerTwo: '',
      isGameOver: false,
      endMessage: ''
    };

    this.onSquareClick = this.onSquareClick.bind(this);
    this.onSelectOpponent = this.onSelectOpponent.bind(this);
    this.playAgain = this.playAgain.bind(this);
  }

  componentDidUpdate() {
    let winner = utilites.getWinner(this.state.squares);
    if (!this.state.isGameOver) {
      if (winner !== '') {
        this.setState({
          isGameOver: true,
          endMessage: `'${winner}' Player Wins!`
        });
      }
      else if (this.state.turnCount === 9) {
        this.setState({
          isGameOver: true,
          endMessage: 'Tie!'
        });
      }
      else if ([this.state.playerOne, this.state.playerTwo][this.state.turnCount % 2] === "computer") {
        let nextSquares = [...this.state.squares];
        let winningMove = utilites.getWinningMove(this.state.squares);
        console.log('winningMove: ' + winningMove);
        let move: number;
        if (winningMove < 0) {
          move = utilites.getRandomMove(this.state.squares);
        }
        else {
          move = winningMove;
        }

        if (this.state.turnCount % 2 === 0) {
          nextSquares[move] = 'X';
        }
        else {
          nextSquares[move] = 'O';
        }
        this.setState({
          squares: nextSquares,
          turnCount: this.state.turnCount + 1
        });
      }
    }
  }

  onSquareClick(index: number) {
    console.log('Clicked!');
    let nextSquares = [...this.state.squares];
    if (nextSquares[index] === '') {
      if (this.state.turnCount % 2 === 0) {
        nextSquares[index] = 'X';
      }
      else {
        nextSquares[index] = 'O';
      }
    }

    this.setState({
      squares: nextSquares,
      turnCount: this.state.turnCount + 1
    });
  }

  onSelectOpponent(opponent: string) {
    this.setState({
      playerTwo: opponent
    });
  }

  playAgain() {
    this.setState({
      squares: new Array(9).fill(''),
      turnCount: 0,
      isGameOver: false
    });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Tic Tac Toe</h1>
        </header>
        <main>
          <Board values={this.state.squares} onSquareClick={this.onSquareClick} />
          {this.state.playerTwo === '' && <StartModal onSelectOpponent={this.onSelectOpponent} />}
          {this.state.isGameOver && <EndModal playAgain={this.playAgain} message={this.state.endMessage} />}
        </main>
      </div>
    );
  }

}

export default TicTacToe;
