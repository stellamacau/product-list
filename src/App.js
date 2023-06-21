import React from "react";
import ListItem from "./ListItem";
import SharedContext from "./SharedContext";
import ThemeSwitch from "./ThemeSwitch";

class App extends React.Component {
  state = {
    selectedItems: [],
    theme: "dark",
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === "dark" ? "light" : "dark",
    });
  };

  listItemChangeHandler = (item) => {
    //
    let newSelectedItems = [...this.state.selectedItems];

    if (newSelectedItems.includes(item)) {
      newSelectedItems = this.state.selectedItems.filter(
        (theItem) => item !== theItem
      );
    } else {
      newSelectedItems.push(item);
    }

    this.setState({
      selectedItems: newSelectedItems,
    });
  };

  render() {
    return (
      <SharedContext.Provider
        value={{
          theme: this.state.theme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <div
          className={`min-h-screen flex justify-center items-center  ${
            this.state.theme === "dark" ? "bg-current" : "bg-slate-200"
          }`}
          //  className="min-h-screen flex justify-center items-center bg-slate-200"
        >
          <div className="flex max-w-3xl mx-auto w-full gap-x-8">
            <div className="w-1/2">
              <h2
                className={`text-2xl font-bold ${
                  this.state.theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Apple Products
              </h2>
              <ul className="mt-4 flex flex-col gap-y-3">
                {["iPhone", "iPad", "MacBook", "Apple TV", "HomePod"].map(
                  (item) => {
                    return (
                      <ListItem
                        title={item}
                        active={this.state.selectedItems.includes(item)}
                        onChange={this.listItemChangeHandler}
                      >
                        {item}
                      </ListItem>
                    );
                  }
                )}
              </ul>
              <p className="mt-3 text-slate-400 text-sm">
                {this.state.selectedItems.length} item(s) selected
              </p>
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl font-bold text-slate-400">
                Selected Products
              </h2>
              <p className="mt-4 text-slate-800 text-lg">
                {this.state.selectedItems.join(", ")}
              </p>
            </div>
            <div>
              <ThemeSwitch></ThemeSwitch>
            </div>
          </div>
        </div>
      </SharedContext.Provider>
    );
  }
}

export default App;
