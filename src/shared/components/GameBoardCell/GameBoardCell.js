import React, { PureComponent } from "react";
import "./GameBoardCell.css";

class GameBoardCell extends PureComponent {
  state = {
    index: this.props.index,
    by: null,
    selected: false,
  };

  static getDerivedStateFromProps(props, state) {
    const newState = {};

    if (props.selected !== state.selected) {
      newState.selected = props.selected;
    }

    if (props.by !== state.by) {
      newState.by = props.by;
    }

    return newState;
  }

  handleClick = () => {
    if (this.state.by !== null) {
      return false;
    }

    if (typeof this.props.onClick === "function") {
      this.props.onClick(this.state.index);
    }
  };

  render() {
    const { by, selected } = this.state;

    let cellClassName = "GameBoardCell";
    cellClassName += by ? ` GameBoardCell--${by}` : "";
    cellClassName += selected ? ` GameBoardCell--selected` : "";

    return (
      <div className={cellClassName} onClick={this.handleClick}>
        <div className="GameBoardCell__layer">
          <div className="GameBoardCell__X">
            <div className="GameBoardCell__X__line"></div>
            <div className="GameBoardCell__X__line"></div>
          </div>
        </div>
        <div className="GameBoardCell__layer">
          <div className="GameBoardCell__O"></div>
        </div>
      </div>
    );
  }
}

export default GameBoardCell;
