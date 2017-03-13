import React from 'react';
import {render} from 'react-dom';

let jqtest = $('#app');
console.log('Hello World!!!!', jqtest);

function Title(props) {
    return (
      <div>
        <div className="row">
          <h1 className="col-sm-12 text-center"> 
            HELLO REACT!!!
          </h1>
        </div>
        <div className="row">
          <h2 className="col-sm-12 text-center"> 
            {props.text}
          </h2>
        </div>
        <div className="row">
          <p className="col-sm-12 lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae lacinia ipsum. Nulla dapibus venenatis aliquet. In congue dolor sit amet eros porta, in cursus metus rhoncus. 
          </p>
        </div>
      </div>
    );
}

function Square(props) {
  return (
    <button className="square btn btn-default btn-lg" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      cross: <i className="fa fa-times fa-4x" data-player='X' aria-hidden="true"></i>,
      circle: <i className="fa fa-circle-o fa-4x" data-player='O' aria-hidden="true"></i>,
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? this.state.cross : this.state.circle;
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    console.log('winner', winner);
    let status;
    if (winner) {
      status = 'Winner: ' + winner.props['data-player'];
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div className="">
        <h3 className="status text-center">{status}</h3>
        <div className="row sm-col-12 text-center">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
        </div>
        <div className="row sm-col-12 text-center">
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
        </div>
        <div className="row sm-col-12 text-center">
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      </div>
    );
  }
}

export class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <header className="">
          <Title text="Tic Tac Toe" />
        </header>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}