import React, { PureComponent } from "react";
import GameBoardCell from "../GameBoardCell/GameBoardCell";
import "./GameBoard.css";

class GameBoard extends PureComponent {
  state = {
    size: this.props.size || 3,
    currentPlayer: "X",
    grid: [],
    matched: [],
    hasWon: false,
  };

  componentDidMount() {
    this.setState({
      grid: this.createGrid(),
    });
  }

  createGrid = () => {
    const grid = [];

    for (let i = 0; i < this.state.size * this.state.size; i++) {
      grid.push({
        index: i,
        by: null,
      });
    }

    return grid;
  };

  handleClick = (cellId) => {
    const { grid, currentPlayer, hasWon } = this.state;

    if (hasWon) {
      return false;
    }

    grid[cellId].by = currentPlayer;

    const matched = this.validate(cellId);

    this.setState({
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      grid,
      matched: matched || [],
      hasWon: matched ? true : false,
    });
  };

  validateHorizontal = (cellId) => {
    const { size, grid } = this.state;

    const start = Math.floor(cellId / size) * size;
    const end = start + size;

    const match = grid[cellId].by;
    const cells = [];

    for (let i = start; i < end; i++) {
      if (grid[i].by !== match) {
        return false;
      }
      cells.push(i);
      continue;
    }

    return cells;
  };

  validateVertical = (cellId) => {
    const { size, grid } = this.state;

    const start = cellId % size;
    const end = start + size * (size - 1);

    const match = grid[cellId].by;
    const cells = [];

    for (let i = start; i <= end; i = i + size) {
      if (grid[i].by !== match) {
        return false;
      }
      cells.push(i);
      continue;
    }

    return cells;
  };

  validateDiagonal = (cellId) => {
    const { size, grid } = this.state;

    let start;
    let end;
    let delta;

    if (cellId % (size + 1) === 0) {
      start = 0;
      end = size * size - 1;
      delta = size + 1;
    } else if (cellId % (size - 1) === 0) {
      start = size - 1;
      end = size * size - size;
      delta = size - 1;
    } else return false;

    const match = grid[cellId].by;
    const cells = [];

    for (let i = start; i <= end; i = i + delta) {
      if (grid[i].by !== match) {
        return false;
      }
      cells.push(i);
      continue;
    }

    return cells;
  };

  validate = (cellId) => {
    const isValid =
      this.validateHorizontal(cellId) ||
      this.validateVertical(cellId) ||
      this.validateDiagonal(cellId) ||
      false;

    return isValid;
  };

  render() {
    const canvasClassName = `GameBoard${
      this.state.hasWon ? " GameBoard--has-won" : ""
    }`;

    const gridTemplateColumns = Array.from(Array(this.state.size)).reduce(
      (value) => value + (value !== "" ? " " : "") + "auto",
      ""
    );

    return (
      <div className={canvasClassName}>
        <div className="GameBoard__grid" style={{ gridTemplateColumns }}>
          {this.state.grid.map((cell, index) => {
            return (
              <GameBoardCell
                key={index}
                index={cell.index}
                by={cell.by}
                selected={this.state.matched.includes(cell.index)}
                onClick={this.handleClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default GameBoard;
