import React from "react";
import SharedContext from "./SharedContext";

class ListItem extends React.Component {
  toggleActive = () => {
    this.props.onChange(this.props.title);
  };

  render() {
    return (
      <SharedContext.Consumer>
        {(sharedData) => {
          return (
            <li
              className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
                this.props.active
                  ? "bg-slate-800 text-white"
                  : "bg-white hover:bg-slate-100"
              }`}
              onClick={this.toggleActive}
            >
              {this.props.title}
            </li>
          );
        }}
      </SharedContext.Consumer>
    );
  }
}

export default ListItem;
